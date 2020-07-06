import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@store/+store/store.facade';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private storesFacade: StoreFacade, private productsFacade: ProductFacade) {}
    ngOnInit(): void {
        //this.productsFacade.fetchASpecStoreStart('Mirra');
    }
}
