import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'lib-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {
    public error$: Observable<string> = this.productFacade.error$;
    public paramsSubscription: Subscription;
    public storeId: string;
    public storeFound = true;
    constructor(private route: ActivatedRoute, private productFacade: ProductFacade) {}
    ngOnInit(): void {
        this.paramsSubscription = this.route.params.subscribe((params: Params) => {
            this.storeId = params['store'];
            this.productFacade.fetchASpecStoreStart(this.storeId);
        });
    }
}
