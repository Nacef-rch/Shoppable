import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable } from 'rxjs';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    products: StoreProducts[];
    productsArray: StoreProducts[];
    categories = [];
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    constructor(private productFacade: ProductFacade) {}

    ngOnInit(): void {
        this.productFacade.fetchStoreStart();

        this.Products$.subscribe((resData) => {
            this.products = resData;
            this.productsArray = resData;
            resData.forEach((data) => {
                this.categories.push(data.categoryId);

                this.categories.splice(0, this.categories.length, ...new Set(this.categories));
            });
        });
    }
    onClick(category) {
        this.products = this.productsArray;
        console.log(category);
        const newArray = this.products.filter(function (el) {
            return el.categoryId == category;
        });
        this.products = newArray;
        console.log(this.products);
    }
}
