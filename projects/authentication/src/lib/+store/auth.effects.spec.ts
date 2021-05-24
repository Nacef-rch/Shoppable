/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { AuthEffects } from '@authentication/+store/auth.effects';
import { AuthenticationService } from '@authentication/services/authentication.service';
import * as authAction from '@authentication/+store/auth.actions';
import * as authMock from '@authentication/mocks/auth.mock.json';
import * as helper from '@authentication/helpers/handleError';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';

describe('UserEffects', () => {
    let effects: AuthEffects;
    let actions$: Observable<any>;
    let router: Router;
    let authService: AuthenticationService;
    let translate: I18nService;
    let httpTestingController: HttpTestingController;
    let http: ApiService;

    class MockRouter {
        navigate(path) {}
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthEffects,
                {
                    provide: AuthenticationService,
                    useValue: {
                        setLogoutTimer: jest.fn(),
                        clearLogoutTimer: jest.fn()
                    }
                },
                {
                    provide: ApiService,
                    useValue: {
                        get: jest.fn(),
                        post: jest.fn()
                    }
                },

                {
                    provide: I18nService,
                    useValue: {
                        lang: 'en'
                    }
                },
                {
                    provide: Router,
                    useValue: {
                        MockRouter
                    }
                },
                provideMockActions(() => actions$)
            ],
            imports: [HttpClientTestingModule]
        });

        effects = TestBed.inject(AuthEffects);
        authService = TestBed.inject(AuthenticationService);
        actions$ = TestBed.inject(Actions);
        http = TestBed.inject(ApiService);
    });
    it('should be created', async () => {
        expect(effects).toBeTruthy();
        expect(authService).toBeTruthy();
        expect(actions$).toBeTruthy();
        expect(http).toBeTruthy();
    });
    it('[LOGIN] Should return authAction.AUTHENTICATE_SUCCESS, with the user, on success', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = authAction.LOGIN_START(authMock.userOnLogin);
        const completion = authAction.AUTHENTICATE_SUCCESS({
            ...authMock.userGotToken,
            expirationDate: new Date(1591611590 * 1000)
        });
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: authMock.Token });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.authLogin$).toBeObservable(expected);
    });
    it('[LOGIN] Should return authAction.AUTHENTICATE_FAIL, with an Error, on Fail', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        spyOn(helper, 'handleError').and.returnValue('Wrong credentials, please try again');
        // GIVEN
        const action = authAction.LOGIN_START(authMock.userOnLogin);
        const error = 'Wrong credentials, please try again';
        const completion = authAction.AUTHENTICATE_FAIL({
            errorMessage: error
        });

        actions$ = hot('-a', { a: action });
        const response = cold('-#|', {}, error);
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.authLogin$).toBeObservable(expected);
    });

    it('[SIGNUP] Should return authAction.AUTHENTICATE_SUCCESS, with the user, on success', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = authAction.SIGNUP_START(authMock.userOnRegister);
        const completion = authAction.AUTHENTICATE_SUCCESS({
            ...authMock.userGotToken,
            expirationDate: new Date(1591611590 * 1000)
        });
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: authMock.Token });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.authSignup$).toBeObservable(expected);
    });
    it('[SIGNUP] Should return authAction.AUTHENTICATE_FAIL, with an Error, on Fail', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        spyOn(helper, 'handleError').and.returnValue('Email in use, please try again');
        // GIVEN
        const action = authAction.SIGNUP_START(authMock.userOnRegister);
        const error = 'Email in use, please try again';
        const completion = authAction.AUTHENTICATE_FAIL({
            errorMessage: error
        });

        actions$ = hot('-a', { a: action });
        const response = cold('-#|', {}, error);
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.authSignup$).toBeObservable(expected);
    });
});

describe('local-storage dummy', () => {
    it('local-storage dummy', () => {
        expect(true).toBe(true);
    });
});
