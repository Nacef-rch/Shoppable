import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@store/+store/store.facade';
import { StoreModel } from '@store/models/store.model';

@Component({
    selector: 'lib-home-stores',
    templateUrl: './home-stores.component.html',
    styleUrls: ['./home-stores.component.scss']
})
export class HomeStoresComponent implements OnInit {
    allStores: StoreModel[];
    constructor(private router: Router, private storesFacade: StoreFacade) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.storesFacade.fetchStores();
            this.storesFacade.stores$.subscribe((resData) => {
                this.allStores = resData;
            });
        }, 200);
    }

    navigateToShop(store: StoreModel): void {
        this.router.navigate([`/${store.storeId}/shop`]);
    }
}
