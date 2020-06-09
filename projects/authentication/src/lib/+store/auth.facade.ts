import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '@authentication/+store/auth.actions';
import { authQuery } from '@authentication/+store/auth.selectors';
import { AuthStore } from '@authentication/+store/auth.reducer';
@Injectable({
    providedIn: 'root'
})
export class AuthFacade {
    public user$ = this.store.select(authQuery.getUser); // <== observable
    public error$ = this.store.select(authQuery.getAuthError);
    public loading$ = this.store.select(authQuery.getLoading);
    constructor(private store: Store<AuthStore>) {}

    public authSuccess(
        email: string,
        userId: string,
        token: string,
        expirationDate: Date,
        redirect: boolean
    ): void {
        this.store.dispatch(
            AuthActions.AUTHENTICATE_SUCCESS({
                email: email,
                userId: userId,
                token: token,
                expirationDate: expirationDate,
                redirect: redirect
            })
        );
    }

    public logout(): void {
        this.store.dispatch(AuthActions.LOGOUT());
    }

    public loginStart(email: string, password: string): void {
        this.store.dispatch(
            AuthActions.LOGIN_START({
                email: email,
                password: password
            })
        );
    }

    public signupStart(
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
        handle: string
    ): void {
        this.store.dispatch(
            AuthActions.SIGNUP_START({
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                handle: handle
            })
        );
    }

    public authFail(errorMessage: string): void {
        this.store.dispatch(
            AuthActions.AUTHENTICATE_FAIL({
                errorMessage: errorMessage
            })
        );
    }

    public clearError(): void {
        this.store.dispatch(AuthActions.CLEAR_ERROR());
    }

    public autoLogin(): void {
        this.store.dispatch(AuthActions.AUTO_LOGIN());
    }
}
