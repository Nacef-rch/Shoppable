import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StoreState, StoreStoreName } from './store.reducer';

export const getState = createFeatureSelector<StoreState>(StoreStoreName);

export const getLoading = createSelector(getState, (state: StoreState) => state.loading);
export const getStores = createSelector(getState, (state: StoreState) => state.stores);
export const getError = createSelector(getState, (state: StoreState) => state.storeError);

export const storeQuery = {
    getLoading,
    getStores,
    getError
};
