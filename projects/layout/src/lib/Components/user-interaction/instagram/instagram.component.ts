import { Component, OnInit, SimpleChanges, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { OneProduct } from '@product/models/product.model';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

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
    paramsSubscription: Subscription;
    productsSubscription: Subscription;
    product: OneProduct;
    instaProductId;
    pageStart = 0;
    pageEnd = 3;
    comment = false;
    like = false;
    show = true;
    noComments = false;
    commentBox;

    constructor(private productFacade: ProductFacade, private route: ActivatedRoute) {}
    ngOnInit(): void {
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

    onComment() {
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
    onLike() {
        this.like = !this.like;

        this.productFacade.productLike(this.instaProductId);
    }
    onDisLike() {
        this.like = !this.like;

        this.productFacade.productUnLike(this.instaProductId);
    }
    postComment(body: string) {
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
    showMoreComments() {
        if (this.product.commentCount <= this.pageEnd + 3) {
            this.show = false;
        }
        this.pageStart = this.pageStart + 2;
        this.pageEnd = this.pageEnd + 2;
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.productsSubscription.unsubscribe();
        this.like = false;
        this.comment = false;
        this.show = true;
        this.noComments = false;
    }
}
