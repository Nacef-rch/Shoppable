import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {
    constructor(private productFacade: ProductFacade) {}
    ngOnInit(): void {
        this.productFacade.fetchStoreStart();
    }
}
