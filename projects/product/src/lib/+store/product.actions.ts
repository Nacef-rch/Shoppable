import { createAction, props } from '@ngrx/store';

import {
    StoreProducts,
    StoreCategories,
    CartProducts,
    OneProduct
} from '@product/models/product.model';

//IMPORT PRODUCT
export const IMPORT_SUCCESS = createAction(
    '[Product] Import success',
    props<{ successMessage: string }>()
);

export const IMPORT_START = createAction(
    '[Product] Import Start',
    props<{
        categoryId: string;
        name: string;
        description: string;
        imageUrl: string;
        unitPrice: number;
        quantityInStock: number;
    }>()
);

export const IMPORT_FAIL = createAction('[Product] Import Fail', props<{ errorMessage: string }>());

//DELETE PRODUCT
export const DELETE_PRODUCT = createAction(
    '[Product] Delete product',
    props<{ productId: string }>()
);

//FETCH PRODUCTS FROM USER STORE
export const FETCH_STORE_PRODUCTS_SUCCESS = createAction(
    '[Product] Fetch store products success',
    props<{ products: StoreProducts[] }>()
);
export const FETCH_STORE_PRODUCTS_START = createAction('[Product] Fetch Store products Start');

export const FETCH_THIS_STORE_PRODUCTS_START = createAction(
    '[Product] Fetch A specific Store products Start',
    props<{ storeId: string }>()
);

//FETCH CATEGORIES FROM USER STORE
export const FETCH_STORE_CATEGORY_SUCCESS = createAction(
    '[Product] Fetch store category success',
    props<{ category: StoreCategories[] }>()
);
export const FETCH_STORE_CATEGORY_START = createAction('[Product] Fetch Store category Start');

//CHANGE PRODUCT ON STOCK QUANTITY
export const CHANGE_PRODUCT_STOCK = createAction(
    '[Product] change product stock',
    props<{ productId: string; quantityInStock: number }>()
);

//START & STOP LOADING
export const LOADING_START = createAction('[Product] loading start');
export const LOADING_STOP = createAction('[Product] loading  stop');

//CLEAR MESSAGES
export const CLEAR_ERROR = createAction('[Product] Clear Error');
export const CLEAR_SUCCESS = createAction('[Product] Clear SUCCESS');

//ADD PRODUCTS TO USER BASKET
export const CART_PRODUCTS = createAction(
    '[Product] Add products to cart',
    props<{ product: CartProducts }>()
);
//REMOVE PRODUCTS FROM USER BASKET
export const REMOVE_CART_PRODUCTS = createAction(
    '[Product] Remove products from cart',
    props<{ product: CartProducts[]; quantity: number }>()
);

export const LIKE_PRODUCTS = createAction('[Product] like product', props<{ productId: string }>());
export const UNLIKE_PRODUCTS = createAction(
    '[Product] unlike product',
    props<{ productId: string }>()
);

export const GET_ONE_PRODUCT_START = createAction(
    '[Product] get one product start ',
    props<{ productId: string }>()
);
export const GET_ONE_PRODUCT_SUCCESS = createAction(
    '[Product] get one product success',
    props<{ product: OneProduct }>()
);
export const POST_ONE_COMMENT_START = createAction(
    '[Product] post a comment success',
    props<{ productId: string; body: string }>()
);
