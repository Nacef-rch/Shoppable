/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';

import { AuthFacade } from '@authentication/+store/auth.facade';
import { AuthGuard } from '@authentication/guards/auth.guard';

class MockRouter {
    navigate(path) {}
}

describe('Auth Guard', () => {
    let guard: AuthGuard;
    let router;

    let store: MockStore;
    let authFacade: AuthFacade;

    const initialState = { user: null };
    const userMock = {
        email: 'nacef',
        id: '133464',
        _token: 'zarzaezaeazeaze',
        _tokenExpirationDate: new Date()
    };
    const userMockFalse = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: AuthGuard,
                    useValue: {
                        canActivate: jest.fn()
                    }
                },
                { provide: Router, useValue: MockRouter },
                provideMockStore({ initialState }),
                {
                    provide: AuthFacade,
                    useValue: {
                        user$: of(userMock)
                    }
                }
            ]
        });

        store = TestBed.inject(MockStore);
        guard = TestBed.inject(AuthGuard);
        authFacade = TestBed.inject(AuthFacade);
    });
    it('should be created', () => {
        expect(store).toBeTruthy();
        expect(guard).toBeTruthy();
    });
    it('should return true if the user state is  logged in', () => {
        const expected = cold('(-a|)', { a: true });
        router = new MockRouter();
        guard = new AuthGuard(router, authFacade);
        expect(guard.canActivate()).toBeObservable(expected);
    });
    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         providers: [
    //             {
    //                 provide: AuthFacade,
    //                 useValue: {
    //                     user$: of(userMockFalse)
    //                 }
    //             }
    //         ]
    //     });

    //     authFacade = TestBed.inject(AuthFacade);
    // });
    // it('should return false if the user state is not logged in', () => {
    //     const expected = cold('(-a|)', { a: false });
    //     router = new MockRouter();
    //     guard = new AuthGuard(router, authFacade);
    //     expect(guard.canActivate()).toBeObservable(expected);
    // });
});
