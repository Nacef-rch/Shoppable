import { Component, OnInit } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'lib-product-inventory',
    templateUrl: './product-inventory.component.html',
    styleUrls: ['./product-inventory.component.scss']
})
export class ProductInventoryComponent implements OnInit {
    imgUrl;
    titre;
    description;
    category;
    price;
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    heading = 'Add product';
    subheading =
        'Tabs are used to split content between multiple sections. Wide variety available.';
    icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
    constructor(private productFacade: ProductFacade) {}
    ngOnInit(): void {
        this.productFacade.fetchStoreStart();
    }
    viewProduct(event) {
        this.imgUrl = event.imageUrl;
        this.titre = event.name;
        this.description = event.description;
        this.category = event.categoryId;
        this.price = event.unitPrice;
    }
}
