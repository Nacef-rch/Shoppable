import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productStoreName, ProductState } from '@product/+store/product.reducer';

export const getState = createFeatureSelector<ProductState>(productStoreName);

export const getProductSuccess = createSelector(
    getState,
    (state: ProductState) => state.productSuccess
);
export const getProductError = createSelector(
    getState,
    (state: ProductState) => state.productError
);
export const getLoading = createSelector(getState, (state: ProductState) => state.loading);

export const productQuery = {
    getState,
    getProductSuccess,
    getProductError,
    getLoading
};
