import { Component, OnInit, Input } from '@angular/core';
import { StoreProducts } from '@product/models/product.model';
import { Observable } from 'rxjs/internal/Observable';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() productsTab;

    test;
    pageStart = 0;
    pageEnd = 6;
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    products: StoreProducts[];
    counter = Array;
    constructor(private productFacade: ProductFacade) {}

    ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            this.products = resData;
            this.test = Math.ceil(resData.length / 6);
            console.log(this.test);
        });
    }

    pageData(i) {
        this.pageStart = 6 * (i - 1);
        this.pageEnd = 6 * i;
        console.log(this.products.length);
    }

    topFunction() {
        document.body.scrollTop = 300; // For Safari
        document.documentElement.scrollTop = 300; // For Chrome, Firefox, IE and Opera
    }
}
