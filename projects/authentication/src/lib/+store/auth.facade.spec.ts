import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as authActions from '@authentication/+store/auth.actions';
import { AuthFacade } from '@authentication/+store/auth.facade';
import { AuthStore } from '@authentication/+store/auth.reducer';
import * as authMock from '@authentication/mocks/auth.mock.json';
import { AuthenticateSuccessType } from '@authentication/models/returnTypes.model';

describe('UserFacade', () => {
    let store: MockStore<AuthStore>;
    let facade: AuthFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthFacade, provideMockStore()]
        });
        store = TestBed.inject(Store) as MockStore<AuthStore>;
        //store = TestBed.inject(Store);
        facade = TestBed.inject(AuthFacade);
        spyOn(store, 'dispatch');
    });
    it('should be created', () => {
        expect(facade).toBeTruthy();
    });
    it('should dispatch a authActions.AUTHENTICATE_SUCCESS action when AuthSuccess is called', () => {
        // GIVEN
        const user: AuthenticateSuccessType = {
            ...authMock.userGotToken,
            expirationDate: new Date()
        };
        const action = authActions.AUTHENTICATE_SUCCESS(user);
        // WHEN
        facade.AuthSuccess(user.email, user.userId, user.token, user.expirationDate, user.redirect);
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.LOGOUT action when Logout is called', () => {
        // GIVEN
        const action = authActions.LOGOUT();
        // WHEN
        facade.Logout();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.LOGIN_START action when Logout is called', () => {
        // GIVEN
        const action = authActions.LOGIN_START(authMock.userOnLogin);
        // WHEN
        facade.LoginStart(authMock.userOnLogin.email, authMock.userOnLogin.password);
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.AUTHENTICATE_FAIL action when AuthFail is called', () => {
        // GIVEN
        const errorMessage = 'Error';
        const action = authActions.AUTHENTICATE_FAIL({ errorMessage });
        // WHEN
        facade.AuthFail(errorMessage);
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.SIGNUP_START action when SignupStart is called', () => {
        // GIVEN
        const action = authActions.SIGNUP_START(authMock.userOnRegister);
        // WHEN
        facade.SignupStart(
            authMock.userOnRegister.name,
            authMock.userOnRegister.email,
            authMock.userOnRegister.password,
            authMock.userOnRegister.confirmPassword,
            authMock.userOnRegister.handle
        );
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.CLEAR_ERROR action when ClearError is called', () => {
        // GIVEN
        const action = authActions.CLEAR_ERROR();
        // WHEN
        facade.ClearError();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a authActions.AUTO_LOGIN action when AutoLogin is called', () => {
        // GIVEN
        const action = authActions.AUTO_LOGIN();
        // WHEN
        facade.AutoLogin();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
});
