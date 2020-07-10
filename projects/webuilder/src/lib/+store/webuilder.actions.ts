import { createAction, props } from '@ngrx/store';
import { Logo, ThemeWeb, ButtonsWeb } from '@webuilder/models/webuilder.model';

export const ADD_LOGO = createAction('[Webuilder] adding logo', props<{ logo: Logo }>());
export const ADD_THEME = createAction('[Webuilder] adding theme', props<{ theme: ThemeWeb }>());
export const ADD_BUTTONS = createAction(
    '[Webuilder] adding button',
    props<{ button: ButtonsWeb }>()
);
export const ADD_TEXT = createAction(
    '[Webuilder] adding TEXT',
    props<{ sectionText: string; webText: any }>()
);
// export const ACTIVE_STORES = createAction('[Stores] Active store', props<{ store: string }>());
// export const FETCH_STORE_START = createAction('[Stores] Fetch Stores Start');
// export const IMPORT_FAIL = createAction('[Stores] Import Fail', props<{ errorMessage: string }>());
