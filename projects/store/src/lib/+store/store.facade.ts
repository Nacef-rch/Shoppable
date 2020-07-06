import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as storeActions from '@store/+store/store.actions';

import { StoreStore } from '@store/+store/store.reducer';
import { storeQuery } from './store.selectors';

@Injectable({
    providedIn: 'root'
})
export class StoreFacade {
    public stores$ = this.store.select(storeQuery.getStores);
    public error$ = this.store.select(storeQuery.getError);
    public loading$ = this.store.select(storeQuery.getLoading);

    constructor(private store: Store<StoreStore>) {}

    public fetchStores(): void {
        this.store.dispatch(storeActions.FETCH_STORE_START());
    }

    public importFail(errorMessage: string): void {
        this.store.dispatch(
            storeActions.IMPORT_FAIL({
                errorMessage: errorMessage
            })
        );
    }
}
