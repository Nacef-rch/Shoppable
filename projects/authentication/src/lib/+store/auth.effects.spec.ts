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
    });
    it('should be created', async () => {
        expect(effects).toBeTruthy();
    });
    // it('should', () => {
    //     httpTestingController = TestBed.inject(HttpTestingController);
    //     // GIVEN
    //     const action = authAction.LOGIN_START(authMock.userOnLogin);
    //     const completion = authAction.AUTHENTICATE_SUCCESS({
    //         ...authMock.userGotToken,
    //         expirationDate: new Date()
    //     });
    //     actions$ = hot('-a', { a: action });
    //     const response = cold('-a|', { a: authMock.Token.token });
    //     const expected = cold('--c', { c: completion });
    //     // WHEN
    //     http.post = jest.fn(() => response);
    //     // THEN
    //     expect(effects.authLogin$).toBeObservable(expected);
    // });
    // it('should', () => {
    //     const authSuccess = {
    //         ...authMock.userGotToken,
    //         expirationDate: new Date()
    //     };
    //     const action = authAction.AUTHENTICATE_SUCCESS(authSuccess);
    // });
});

// describe('local-storage dummy', () => {
//     it('local-storage dummy', () => {
//         expect(true).toBe(true);
//     });
// });
