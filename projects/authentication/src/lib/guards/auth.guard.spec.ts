// import { TestBed } from '@angular/core/testing';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { cold } from 'jasmine-marbles';
// import { AuthGuard } from '@authentication/guards/auth.guard';
// import * as fromAuth from '@authentication/+store/auth.reducer';
// import { MemoizedSelector } from '@ngrx/store';

// class MockRouter {
//     navigate(path) {}
// }

// describe('Auth Guard', () => {
//     let guard: AuthGuard;
//     let store: MockStore;
//     let authService;
//     let router;
//     let mockUserSelector: MemoizedSelector<fromAuth.State, string>;
//     const initialState = { loggedIn: false };

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 // any modules needed
//             ],
//             providers: [
//                 AuthGuard,
//                 provideMockStore({ initialState })
//                 // other providers
//             ]
//         });

//         store = TestBed.inject(MockStore);
//         guard = TestBed.inject(AuthGuard);

//         mockUserSelector = store.overrideSelector(fromAuth.initialState.user, false);
//     });

//     it('should return false if the user state is not logged in', () => {
//         const expected = cold('(a|)', { a: false });
//         router = new MockRouter();
//         guard = new AuthGuard(authService, router);

//         expect(guard.canActivate()).toBeObservable(expected);
//     });

//     it('should return true if the user state is logged in', () => {
//         store.setState({ loggedIn: true });

//         const expected = cold('(a|)', { a: true });
//         router = new MockRouter();
//         guard = new AuthGuard(authService, router);

//         expect(guard.canActivate()).toBeObservable(expected);
//     });
// });
describe('local-storage dummy', () => {
    it('local-storage dummy', () => {
        expect(true).toBe(true);
    });
});
