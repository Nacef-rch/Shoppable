import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { AuthGuard } from './auth.guard';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as userMock from '@authentication/mocks/user.mock.json';

class MockRouter {
    navigate(path) {}
}

describe('Auth Guard', () => {
    let guard: AuthGuard;
    let router;
    let store: MockStore;
    let authService;
    const initialState = { user: null };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                AuthGuard,
                { provide: Router, useValue: MockRouter },
                provideMockStore({ initialState })
            ]
        });

        store = TestBed.inject(MockStore);
        guard = TestBed.inject(AuthGuard);
        // spyOn(guard, 'canActivate').and.returnValue(of(Boolean));
    });
    it('should be created', () => {
        expect(store).toBeTruthy();
        expect(guard).toBeTruthy();
    });
    // it('should return false if the user state is not logged in', () => {
    //     const expected = cold('(a|)', { a: false });
    //     router = new MockRouter();
    //     guard = new AuthGuard(authService, router);

    //     expect(guard.canActivate()).toBeObservable(expected);
    // });
    // it('should return true if the user state is logged in', () => {
    //     store.setState({ user: userMock.userGotToken });

    //     const expected = cold('(a|)', { a: true });
    //     router = new MockRouter();
    //     guard = new AuthGuard(authService, router);

    //     expect(guard.canActivate()).toBeObservable(expected);
    // });
});
