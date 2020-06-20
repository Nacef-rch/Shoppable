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
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    constructor(private productFacade: ProductFacade) {}

    ngOnInit(): void {
        this.productFacade.fetchStoreStart();
        this.Products$.subscribe((resData) => {
            this.products = resData;
            console.log(this.products);
        });
    }
    onClick() {
        const newArray = this.products.filter(function (el) {
            return el.categoryId == 'Men';
        });
        this.products = newArray;
        console.log(this.products);
    }
}
