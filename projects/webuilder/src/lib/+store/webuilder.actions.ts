import { createAction, props } from '@ngrx/store';
import { Logo } from '@webuilder/models/webuilder.model';

export const ADD_LOGO = createAction('[Webuilder] adding logo', props<{ logo: Logo }>());
// export const ACTIVE_STORES = createAction('[Stores] Active store', props<{ store: string }>());
// export const FETCH_STORE_START = createAction('[Stores] Fetch Stores Start');
// export const IMPORT_FAIL = createAction('[Stores] Import Fail', props<{ errorMessage: string }>());
