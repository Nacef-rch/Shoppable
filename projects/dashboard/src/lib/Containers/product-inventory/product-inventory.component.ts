import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';
import { InventoryModel } from '@dash/constants/page-titre.constant';

@Component({
    selector: 'lib-product-inventory',
    templateUrl: './product-inventory.component.html',
    styleUrls: ['./product-inventory.component.scss']
})
export class ProductInventoryComponent implements OnInit {
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    imgUrl: string;
    titre: string;
    description: string;
    category: string;
    price: number;

    heading: string = InventoryModel.heading;
    subheading: string = InventoryModel.subheading;
    icon: string = InventoryModel.icon;

    constructor(private productFacade: ProductFacade) {}
    public ngOnInit(): void {
        this.productFacade.fetchStoreStart();
    }
    public viewProduct(event): void {
        this.imgUrl = event.imageUrl;
        this.titre = event.name;
        this.description = event.description;
        this.category = event.categoryId;
        this.price = event.unitPrice;
    }
}
