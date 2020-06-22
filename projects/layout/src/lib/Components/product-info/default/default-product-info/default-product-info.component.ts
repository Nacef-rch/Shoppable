import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ProductFacade } from '@product/+store/product.facade';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-default-product-info',
    templateUrl: './default-product-info.component.html',
    styleUrls: ['./default-product-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultProductInfoComponent implements OnInit, OnDestroy {
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    paramsSubscription: Subscription;
    productSubscription: Subscription;
    productQuantity = 1;
    products: StoreProducts[];
    productId;
    category;
    like = false;
    comment = true;
    product: StoreProducts = null;
    constructor(
        private route: ActivatedRoute,
        private productFacade: ProductFacade,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.paramsSubscription = this.route.params.subscribe((params: Params) => {
            this.productId = params['id'];
            this.category = params['category'];

            this.productSubscription = this.Products$.subscribe((resData) => {
                resData.forEach((product, index, array) => {
                    if (product.productId == this.productId) {
                        this.product = product;
                    }
                    if (index === array.length - 1) {
                        if (!this.product) {
                            window.alert('product not found !!');
                        }
                    }
                });
                this.products = resData;

                this.products = this.products.filter((item) => {
                    if (item.categoryId == this.category && item.productId !== this.productId) {
                        return item;
                    }
                });
            });
        });
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
    }
    clickPlus() {
        this.productQuantity++;
    }
    clickMinus() {
        if (this.productQuantity > 1) {
            this.productQuantity--;
        }
    }
    onLike() {
        this.like = !this.like;
    }
    otherProductClicked(category, product) {
        this.router.navigate([`store/shop/${category}/${product}`]);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.like = false;
        this.productQuantity = 1;
    }
    onComment() {
        this.comment = !this.comment;
    }
}
