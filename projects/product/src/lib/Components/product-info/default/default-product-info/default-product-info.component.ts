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
    public paramsSubscription: Subscription;
    public productSubscription: Subscription;
    public productQuantity = 1;
    public products: StoreProducts[];
    public productId;
    public category;

    product: StoreProducts = null;
    constructor(
        private route: ActivatedRoute,
        private productFacade: ProductFacade,
        private router: Router
    ) {}

    public ngOnInit(): void {
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

    public clickPlus(): void {
        this.productQuantity++;
    }
    public clickMinus(): void {
        if (this.productQuantity > 1) {
            this.productQuantity--;
        }
    }

    public otherProductClicked(category, product): void {
        this.router.navigate([`store/shop/${category}/${product}`]);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        this.productQuantity = 1;
    }

    public AddToCart(): void {
        this.productFacade.addToCart({ ...this.product, quantitySelected: this.productQuantity });
    }

    public ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
    }
}
