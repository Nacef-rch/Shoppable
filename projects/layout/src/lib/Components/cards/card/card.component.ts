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
    @Input() image;
    @Input() name;
    @Input() quantityInStock;
    @Input() unitPrice;
    pageStart = 0;
    pageEnd = 3;
    public Products$: Observable<StoreProducts[]> = this.ProductFacade.storeProducts$;
    products: StoreProducts[];
    constructor(private ProductFacade: ProductFacade) {}

    ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            this.products = resData;
            console.log(this.products);
        });
    }
    nextData() {
        this.pageStart += 3;
        this.pageEnd += 3;
        console.log(this.pageStart);
    }

    prevData() {
        this.pageStart -= 3;
        this.pageEnd -= 3;
    }
}
