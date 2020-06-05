// import { TestBed } from '@angular/core/testing';
// import { AuthEffects } from './auth.effects';
// import { Observable } from 'rxjs';
// import { cold, hot } from 'jasmine-marbles';
// import { AuthenticationService } from '@authentication/services/authentication.service';
// import { I18nService } from '@i18n/services/i18n.service';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Actions } from '@ngrx/effects';
// import * as authAction from '@authentication/+store/auth.actions';
// import * as userMock from '@authentication/mocks/user.mock.json';

// describe('UserEffects', () => {
//     let effects: AuthEffects;
//     let actions$: Observable<any>;
//     let authService: AuthenticationService;
//     let translate: I18nService;
//     let httpTestingController: HttpTestingController;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 AuthEffects,
//                 AuthenticationService,
//                 I18nService,
//                 provideMockActions(() => actions$)
//             ],
//             imports: [HttpClientTestingModule]
//         });

//         effects = TestBed.inject(AuthEffects);
//         actions$ = TestBed.inject(Actions);
//     });
//     it('should', () => {
//         httpTestingController = TestBed.get(HttpTestingController);
//         // GIVEN
//         const action = authAction.LOGIN_START(userMock.userOnLogin);
//         const completion = authAction.AUTHENTICATE_SUCCESS({
//             ...userMock.userGotToken,
//             expirationDate: new Date()
//         });
//         actions$ = hot('-a', { a: action });
//         const expected = cold('--c', { c: completion });
//         expect(
//             effects.authLogin$(userMock.userOnLogin
//           )).toBeObservable(expected);
//         });
//     });
// });
describe('local-storage dummy', () => {
    it('local-storage dummy', () => {
        expect(true).toBe(true);
    });
});
