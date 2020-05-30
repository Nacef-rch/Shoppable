import { createAction, props } from '@ngrx/store';

export const AUTHENTICATE_SUCCESS = createAction(
    '[Auth] Authenticate success',
    props<{
        email: string;
        userId: string;
        token: string;
        expirationDate: Date;
        redirect: boolean;
    }>()
);

export const LOGIN_START = createAction(
    '[Auth] Login Start',
    props<{ email: string; password: string }>()
);

export const AUTHENTICATE_FAIL = createAction(
    '[Auth] Authenticate Fail',
    props<{ errorMessage: string }>()
);
export const SIGNUP_START = createAction(
    '[Auth] Signup Start',
    props<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        handle: string;
    }>()
);
export const LOGOUT = createAction('[Auth] Logout');
export const CLEAR_ERROR = createAction('[Auth] Clear Error');
export const AUTO_LOGIN = createAction('[Auth] Auto Login');
