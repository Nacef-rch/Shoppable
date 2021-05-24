import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productStoreName, ProductState } from '@product/+store/product.reducer';

export const getState = createFeatureSelector<ProductState>(productStoreName);
export const getStoreProducts = createSelector(
    getState,
    (state: ProductState) => state.storeProducts
);
export const getCartProducts = createSelector(getState, (state: ProductState) => state.cartProduct);
export const getCartQuantity = createSelector(
    getState,
    (state: ProductState) => state.cartProductQuantity
);

export const getStoreCategories = createSelector(
    getState,
    (state: ProductState) => state.storeCategories
);
export const getProductSuccess = createSelector(
    getState,
    (state: ProductState) => state.productSuccess
);
export const getProductError = createSelector(
    getState,
    (state: ProductState) => state.productError
);
export const getLoading = createSelector(getState, (state: ProductState) => state.loading);
export const getProduct = createSelector(getState, (state: ProductState) => state.product);

export const productQuery = {
    getState,
    getProductSuccess,
    getProductError,
    getStoreProducts,
    getLoading,
    getStoreCategories,
    getCartProducts,
    getCartQuantity,
    getProduct
};
