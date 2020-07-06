import { Action, createReducer, on } from '@ngrx/store';

import * as StoreActions from '@store/+store/store.actions';
import { StoreModel } from '@store/models/store.model';

export interface StoreState {
    stores: StoreModel[];
    ActiveStore: string;
    storeError: string;
    loading: boolean;
}
export interface StoreStore {
    readonly state: StoreState;
}

export const StoreInitialState: StoreState = {
    stores: [],
    ActiveStore: null,
    storeError: null,
    loading: false
};
const reducer = createReducer(
    StoreInitialState,

    on(StoreActions.FETCH_STORES_SUCCESS, (state, action) => ({
        ...state,
        storeError: null,
        stores: action.stores,
        loading: false
    })),

    on(StoreActions.FETCH_STORE_START, (state, _) => ({
        ...state,
        storeError: null,
        loading: true
    })),
    on(StoreActions.IMPORT_FAIL, (state, action) => ({
        ...state,
        storeError: action.errorMessage,
        loading: false
    })),
    on(StoreActions.ACTIVE_STORES, (state, action) => ({
        ...state,
        ActiveStore: action.store
    }))
    //
);
export function StoreReducer(state: StoreState | undefined, action: Action): StoreState {
    return reducer(state, action);
}

export const StoreStoreName = 'StoreStore';
