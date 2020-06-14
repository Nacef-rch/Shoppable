import { createAction, props } from '@ngrx/store';

export const IMPORT_SUCCESS = createAction(
    '[Product] Import success',
    props<{ successMessage: string }>()
);

export const IMPORT_START = createAction(
    '[Product] Import Start',
    props<{ categoryId: string; name: string; description: string; imageUrl: string }>()
);

export const IMPORT_FAIL = createAction('[Product] Import Fail', props<{ errorMessage: string }>());

export const CLEAR_ERROR = createAction('[Product] Clear Error');
export const CLEAR_SUCCESS = createAction('[Product] Clear SUCCESS');
