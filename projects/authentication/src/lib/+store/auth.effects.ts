import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

import * as AuthActions from '@authentication/+store/auth.actions';
import { User, UserOnRegister, UserOnLogin } from '@authentication/models/user.model';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { handleError } from '@authentication/helpers/handleError';
import { handleAuthentication } from '@authentication/helpers/local-storage.helper';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';

@Injectable()
export class AuthEffects {
    public authSignup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap((signupAction: UserOnRegister) => {
                return this.http
                    .post('/signup', {
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
                            return AuthActions.AUTHENTICATE_SUCCESS({
                                ...handleAuthentication(resData)
                            });
                        }),
                        catchError((error) => {
                            const errorMessage = handleError(error, this.translate.lang);
                            return of(AuthActions.AUTHENTICATE_FAIL({ errorMessage }));
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
                    .post('/login', {
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
                            return AuthActions.AUTHENTICATE_SUCCESS({
                                ...handleAuthentication(resData)
                            });
                        }),
                        catchError((error) => {
                            const errorMessage = handleError(error, this.translate.lang);

                            return of(AuthActions.AUTHENTICATE_FAIL({ errorMessage }));
                        })
                    );
            })
        )
    );

    @Effect({ dispatch: false })
    public authRedirect = this.actions$.pipe(
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
                    console.log(authSuccessAction.redirect);
                    this.router.navigate(['/']);
                }
            }
        )
    );

    @Effect()
    public autoLogin = this.actions$.pipe(
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
    public authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem('userData');
            this.router.navigate(['/auth/login']);
        })
    );
    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthenticationService,
        private translate: I18nService,
        private http: ApiService
    ) {}
}
