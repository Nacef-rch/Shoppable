import { createAction, props } from '@ngrx/store';
import { StoreProducts, StoreCategories } from '@product/models/product.model';

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

export const DELETE_PRODUCT = createAction(
    '[Product] Delete product',
    props<{ productId: string }>()
);

export const IMPORT_FAIL = createAction('[Product] Import Fail', props<{ errorMessage: string }>());

export const FETCH_STORE_PRODUCTS_SUCCESS = createAction(
    '[Product] Fetch store products success',
    props<{ products: StoreProducts[] }>()
);
export const FETCH_STORE_PRODUCTS_START = createAction('[Product] Fetch Store products Start');

export const FETCH_STORE_CATEGORY_SUCCESS = createAction(
    '[Product] Fetch store category success',
    props<{ category: StoreCategories[] }>()
);
export const FETCH_STORE_CATEGORY_START = createAction('[Product] Fetch Store category Start');

export const CHANGE_PRODUCT_STOCK = createAction(
    '[Product] change product stock',
    props<{ productId: string; quantityInStock: number }>()
);

export const CLEAR_ERROR = createAction('[Product] Clear Error');
export const LOADING_START = createAction('[Product] loading start');
export const LOADING_STOP = createAction('[Product] loading  stop');

export const CLEAR_SUCCESS = createAction('[Product] Clear SUCCESS');
