import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@store/+store/store.facade';
import { StoreModel } from '@store/models/store.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-home-stores',
    templateUrl: './home-stores.component.html',
    styleUrls: ['./home-stores.component.scss']
})
export class HomeStoresComponent implements OnInit {
    public isLoading$: Observable<boolean> = this.storesFacade.loading$;
    allStores: StoreModel[];
    allStoresCp: StoreModel[];
    constructor(private router: Router, private storesFacade: StoreFacade) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.storesFacade.fetchStores();
            this.storesFacade.stores$.subscribe((resData) => {
                this.allStores = resData;
                this.allStoresCp = resData;
            });
        }, 200);
    }

    navigateToShop(store: StoreModel): void {
        this.router.navigate([`/${store.storeId}/shop`]);
    }

    public searchFilter(value: string): void {
        const searchText = value.toUpperCase();

        this.allStores = this.allStoresCp;

        this.allStores = this.allStores.filter((item) => {
            const itemText = item.storeId.toUpperCase();
            console.log(itemText);

            if (itemText.includes(searchText)) {
                return item;
            }
        });
    }
}
