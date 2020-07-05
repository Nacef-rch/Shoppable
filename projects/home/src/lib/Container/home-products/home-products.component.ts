import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreProducts } from '@product/models/product.model';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-home-products',
    templateUrl: './home-products.component.html',
    styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    public products: StoreProducts[];
    public productsArray: StoreProducts[];
    public numPage = 1;
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    constructor(private productFacade: ProductFacade) {}

    ngOnInit(): void {
        this.productFacade.fetchASpecStoreStart('Mirra');
        this.Products$.subscribe((resData) => {
            this.products = resData;
            this.productsArray = resData;
        });
    }
    public onPageNumber(event): void {
        this.numPage = event;
    }
    public searchFilter(value: string): void {
        const searchText = value;

        this.products = this.productsArray;

        this.products = this.products.filter((item) => {
            const itemText = item.name;

            if (itemText.includes(searchText)) {
                return item;
            }
        });
    }
}
