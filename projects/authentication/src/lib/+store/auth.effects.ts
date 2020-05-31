import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import jwtDecode from 'jwt-decode';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserOnRegister, UserOnLogin } from '@authentication/models/user.model';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { environment } from '@env/environment';
import { handleError } from '@shared/helpers/api-helpers';

export interface AuthResponseData {
    token: string;
}

const handleAuthentication = (resData) => {
    const tokenDecoded = jwtDecode(resData.token);
    const expirationDate = new Date(+tokenDecoded.exp * 1000);
    const userToken = `Bearer ${resData.token}`;
    const user = new User(tokenDecoded.email, tokenDecoded.user_id, userToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return AuthActions.AUTHENTICATE_SUCCESS({
        email: tokenDecoded.email,
        userId: tokenDecoded.user_id,
        token: userToken,
        expirationDate: expirationDate,
        redirect: true
    });
};
const msgError = (errorRes: any) => {
    const errorMessage = handleError(errorRes);

    return of(AuthActions.AUTHENTICATE_FAIL({ errorMessage }));
};

@Injectable()
export class AuthEffects {
    public authSignup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap((signupAction: UserOnRegister) => {
                return this.http
                    .post<AuthResponseData>(environment.firebaseAPIKey + '/signup', {
                        name: signupAction.name,
                        email: signupAction.email,
                        password: signupAction.password,
                        confirmPassword: signupAction.confirmPassword,
                        handle: signupAction.handle
                    })
                    .pipe(
                        tap((resData) => {
                            const tokenDecoded = jwtDecode(resData.token);
                            this.authService.setLogoutTimer(
                                tokenDecoded.exp * 1000 - new Date().getTime()
                            );
                        }),
                        map((resData) => {
                            return handleAuthentication(resData);
                        }),
                        catchError((error) => {
                            return msgError(error);
                        })
                    );
            })
        )
    );

    public authLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.LOGIN_START),
            switchMap((authData: UserOnLogin) => {
                return this.http
                    .post<AuthResponseData>(environment.firebaseAPIKey + '/login', {
                        email: authData.email,
                        password: authData.password
                    })
                    .pipe(
                        tap((resData) => {
                            const tokenDecoded = jwtDecode(resData.token);

                            this.authService.setLogoutTimer(
                                tokenDecoded.exp * 1000 - new Date().getTime()
                            );
                        }),
                        map((resData) => {
                            return handleAuthentication(resData);
                        }),
                        catchError((error) => {
                            return msgError(error);
                        })
                    );
            })
        )
    );

    @Effect({ dispatch: false })
    authRedirect = this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap(
            (authSuccessAction: {
                email: string;
                userId: string;
                token: string;
                expirationDate: Date;
                redirect: boolean;
            }) => {
                if (authSuccessAction.redirect) {
                    this.router.navigate(['/test']);
                }
            }
        )
    );
    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {
            const userData: {
                email: string;
                id: string;
                _token: string;
                _tokenExpirationDate: string;
            } = JSON.parse(localStorage.getItem('userData'));
            if (!userData) {
                return { type: 'DUMMY' };
            }
            const loadedUser = new User(
                userData.email,
                userData.id,
                userData._token,
                new Date(userData._tokenExpirationDate)
            );

            if (loadedUser.token) {
                const expirationDuration =
                    new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                this.authService.setLogoutTimer(expirationDuration);
                return AuthActions.AUTHENTICATE_SUCCESS({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate),
                    redirect: false
                });
            }
            return { type: 'DUMMY' };
        })
    );

    @Effect({ dispatch: false })
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem('userData');
            this.router.navigate(['/login']);
        })
    );
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
        private authService: AuthenticationService
    ) {}
}
