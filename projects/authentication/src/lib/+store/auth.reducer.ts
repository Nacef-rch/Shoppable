import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '@authentication/+store/auth.actions';
import { User } from '@authentication/models/user.model';

export interface State {
    user: User;
    authError: string;
    loading: boolean;
}
export interface AuthStore {
    readonly state: State;
}

export const initialState: State = {
    user: null,
    authError: null,
    loading: false
};
const reducer = createReducer(
    initialState,
    on(AuthActions.AUTHENTICATE_SUCCESS, (state, action) => {
        const user = new User(action.email, action.userId, action.token, action.expirationDate);
        return {
            ...state,
            authError: null,
            user: user,
            loading: false
        };
    }),
    on(AuthActions.LOGOUT, (state, _) => ({
        ...state,
        user: null
    })),
    on(AuthActions.LOGIN_START, AuthActions.SIGNUP_START, (state, _) => ({
        ...state,
        authError: null,
        loading: true
    })),
    on(AuthActions.AUTHENTICATE_FAIL, (state, action) => ({
        ...state,
        user: null,
        authError: action.errorMessage,
        loading: false
    })),
    on(AuthActions.CLEAR_ERROR, (state, _) => ({
        ...state,
        authError: null
    }))
);
export function authReducer(state: State | undefined, action: Action): State {
    return reducer(state, action);
}

export const authStoreName = 'authStore';
