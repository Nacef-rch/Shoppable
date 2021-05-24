import { createAction, props } from '@ngrx/store';
import { StoreModel } from '@store/models/store.model';

//FETCH ALL STORES
export const FETCH_STORES_SUCCESS = createAction(
    '[Stores] Fetch stores success',
    props<{ stores: StoreModel[] }>()
);
export const ACTIVE_STORES = createAction('[Stores] Active store', props<{ store: string }>());
export const FETCH_STORE_START = createAction('[Stores] Fetch Stores Start');
export const IMPORT_FAIL = createAction('[Stores] Import Fail', props<{ errorMessage: string }>());
