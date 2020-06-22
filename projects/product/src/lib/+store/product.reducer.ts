import { Action, createReducer, on } from '@ngrx/store';

import * as ProductActions from '@product/+store/product.actions';
import { StoreProducts, StoreCategories, CartProducts } from '@product/models/product.model';

export interface ProductState {
    storeProducts: StoreProducts[];
    storeCategories: StoreCategories[];
    cartProduct: CartProducts[];
    cartProductQuantity: number;
    productSuccess: string;
    productError: string;
    loading: boolean;
}
export interface ProductStore {
    readonly state: ProductState;
}

export const productInitialState: ProductState = {
    storeProducts: [],
    storeCategories: [],
    cartProduct: [],
    cartProductQuantity: 0,
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
    on(ProductActions.CART_PRODUCTS, (state, action) => {
        const cartProductsArray = state.cartProduct;
        const Quantity = state.cartProductQuantity + action.product.quantitySelected;

        cartProductsArray.push(action.product);
        return {
            ...state,
            productError: null,
            cartProduct: cartProductsArray,
            cartProductQuantity: Quantity,
            loading: false
        };
    }),
    on(ProductActions.REMOVE_CART_PRODUCTS, (state, action) => {
        return {
            ...state,
            productError: null,
            cartProduct: action.product,
            cartProductQuantity: action.quantity,
            loading: false
        };
    }),
    on(ProductActions.FETCH_STORE_CATEGORY_SUCCESS, (state, action) => ({
        ...state,
        productError: null,
        storeCategories: action.category,
        loading: false
    })),

    on(
        ProductActions.IMPORT_START,
        ProductActions.FETCH_STORE_PRODUCTS_START,
        ProductActions.FETCH_STORE_CATEGORY_START,
        (state, _) => ({
            ...state,
            productError: null,
            loading: true
        })
    ),
    on(
        ProductActions.DELETE_PRODUCT,
        ProductActions.CHANGE_PRODUCT_STOCK,
        ProductActions.LIKE_PRODUCTS,
        (state, _) => ({
            ...state
        })
    ),

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
    })),
    on(ProductActions.LOADING_START, (state, _) => ({
        ...state,
        loading: true
    })),
    on(ProductActions.LOADING_STOP, (state, _) => ({
        ...state,
        loading: false
    }))
);
export function productReducer(state: ProductState | undefined, action: Action): ProductState {
    return reducer(state, action);
}

export const productStoreName = 'productStore';
