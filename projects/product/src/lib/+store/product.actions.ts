import { createAction, props } from '@ngrx/store';
import { StoreProducts } from '@product/models/product.model';

export const IMPORT_SUCCESS = createAction(
    '[Product] Import success',
    props<{ successMessage: string }>()
);

export const IMPORT_START = createAction(
    '[Product] Import Start',
    props<{ categoryId: string; name: string; description: string; imageUrl: string }>()
);
export const IMPORT_FAIL = createAction('[Product] Import Fail', props<{ errorMessage: string }>());

export const FETCH_STORE_PRODUCTS_SUCCESS = createAction(
    '[Product] Fetch store products success',
    props<{ products: StoreProducts[] }>()
);
export const FETCH_STORE_PRODUCTS_START = createAction('[Product] Fetch Store products Start');

export const CLEAR_ERROR = createAction('[Product] Clear Error');
export const CLEAR_SUCCESS = createAction('[Product] Clear SUCCESS');
