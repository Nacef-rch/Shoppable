import { Component, OnInit, SimpleChanges, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';
import { OneProduct } from '@product/models/product.model';

@Component({
    selector: 'lib-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramComponent implements OnInit {
    public Product$: Observable<OneProduct> = this.productFacade.oneProduct$;
    public Success$: Observable<string> = this.productFacade.success$;
    @Input() productId;
    private paramsSubscription: Subscription;
    private productsSubscription: Subscription;
    public product: OneProduct;
    public instaProductId: string;
    public pageStart = 0;
    public pageEnd = 3;
    public comment = false;
    public like = false;
    public show = true;
    public noComments = false;

    constructor(private productFacade: ProductFacade, private route: ActivatedRoute) {}
    public ngOnInit(): void {
        this.paramsSubscription = this.route.params.subscribe((params: Params) => {
            this.instaProductId = params['id'];

            this.productFacade.productComment(this.instaProductId);

            this.productsSubscription = this.Product$.subscribe((resData) => {
                this.product = resData;

                setTimeout(() => {
                    if (this.product.commentCount <= 3) {
                        this.show = false;
                    }
                    if (this.product.commentCount === 0) {
                        this.noComments = true;
                    }
                }, 2000);
            });
        });
    }

    public onComment(): void {
        this.show = false;
        this.noComments = true;
        console.log(this.product);
        this.comment = !this.comment;
        if (this.product.comments.length > 3) {
            this.show = true;
            this.noComments = false;
        }
        this.pageStart = 0;
        this.pageEnd = 3;
    }
    public onLike(): void {
        this.like = !this.like;

        this.productFacade.productLike(this.instaProductId);
    }
    public onDisLike(): void {
        this.like = !this.like;

        this.productFacade.productUnLike(this.instaProductId);
    }
    public postComment(body: string): void {
        const date = new Date();
        const dateString = date.toUTCString();
        const commentMessageSuccess = {
            createdAt: dateString,
            productId: this.productId,
            userHandle: 'nacef',
            body: body
        };

        this.product.comments.unshift(commentMessageSuccess);
        this.noComments = false;

        this.productFacade.postComment(this.instaProductId, body);
    }
    public showMoreComments(): void {
        if (this.product.commentCount <= this.pageEnd + 3) {
            this.show = false;
        }
        this.pageStart = this.pageStart + 2;
        this.pageEnd = this.pageEnd + 2;
    }
    public ngOnChanges(changes: SimpleChanges): void {
        this.productsSubscription.unsubscribe();
        this.like = false;
        this.comment = false;
        this.show = true;
        this.noComments = false;
    }
}
