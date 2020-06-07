import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { AuthGuard } from './auth.guard';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthFacade } from '@authentication/+store/auth.facade';
import * as userMock from '@authentication/mocks/user.mock.json';
import * as fromAuth from '@authentication/+store/auth.reducer';
import { User } from '@authentication/models/user.model';
import { MemoizedSelector } from '@ngrx/store';

class MockRouter {
    navigate(path) {}
}

describe('Auth Guard', () => {
    let guard: AuthGuard;
    let router;
    let authService;
    let store: MockStore;
    let authFacade: AuthFacade;
    let mockGetUser: MemoizedSelector<fromAuth.State, string>;
    const initialState = { user: null };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                //AuthGuard,
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
                        user$: () => {}
                    }
                }
            ]
        });

        store = TestBed.inject(MockStore);
        guard = TestBed.inject(AuthGuard);
        // spyOn(guard, 'canActivate').and.returnValue(of(Boolean));
        //mockGetUser = store.overrideSelector(fromAuth., userMock.userGotToken);
    });
    it('should be created', () => {
        expect(store).toBeTruthy();
        expect(guard).toBeTruthy();
    });
    // it('should return false if the user state is not logged in', () => {
    //     router = new MockRouter();
    //     guard = new AuthGuard(authService, router);
    //     const expected = cold('(a|)', { a: false });

    //     guard.canActivate();
    //     expect(guard.canActivate()).toBe(expected);
    // });
    // it('should return true if the user state is logged in', () => {
    //     store.setState({ user: userMock.userGotToken });

    //     const expected = cold('(a|)', { a: true });
    //     router = new MockRouter();
    //     guard = new AuthGuard(authService, router);

    //     expect(guard.canActivate()).toBeObservable(expected);
    // });
});
