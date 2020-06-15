import { Action, createReducer, on } from '@ngrx/store';

import * as ProductActions from '@product/+store/product.actions';
import { StoreProducts } from '@product/models/product.model';

export interface ProductState {
    storeProducts: StoreProducts[];
    productSuccess: string;
    productError: string;
    loading: boolean;
}
export interface ProductStore {
    readonly state: ProductState;
}

export const productInitialState: ProductState = {
    storeProducts: [],
    productSuccess: null,
    productError: null,
    loading: false
};
const reducer = createReducer(
    productInitialState,
    on(ProductActions.IMPORT_SUCCESS, (state, action) => ({
        ...state,
        productError: null,
        productSuccess: action.successMessage,
        loading: false
    })),
    on(ProductActions.FETCH_STORE_PRODUCTS_SUCCESS, (state, action) => ({
        ...state,
        productError: null,
        storeProducts: action.products,
        loading: false
    })),

    on(ProductActions.IMPORT_START, ProductActions.FETCH_STORE_PRODUCTS_START, (state, _) => ({
        ...state,
        productError: null,
        loading: true
    })),
    on(ProductActions.DELETE_PRODUCT, ProductActions.CHANGE_PRODUCT_STOCK, (state, _) => ({
        ...state
    })),

    on(ProductActions.IMPORT_FAIL, (state, action) => ({
        ...state,
        productSuccess: null,
        productError: action.errorMessage,
        loading: false
    })),
    on(ProductActions.CLEAR_ERROR, (state, _) => ({
        ...state,
        productError: null
    })),
    on(ProductActions.CLEAR_SUCCESS, (state, _) => ({
        ...state,
        productSuccess: null
    }))
);
export function productReducer(state: ProductState | undefined, action: Action): ProductState {
    return reducer(state, action);
}

export const productStoreName = 'productStore';
