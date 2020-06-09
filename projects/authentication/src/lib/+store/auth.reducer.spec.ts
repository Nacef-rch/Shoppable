import * as authActions from '@authentication/+store/auth.actions';
import { initialState, authReducer as reducer } from '@authentication/+store/auth.reducer';
import * as authMock from '@authentication/mocks/auth.mock.json';

describe('authReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            // GIVEN
            // WHEN
            const result = reducer(undefined, {} as any);
            // THEN
            expect(result).toMatchSnapshot();
        });

        describe('AUTHENTICATE', () => {
            it('`AUTHENTICATE_SUCCESS`, should add a user in the state', () => {
                // GIVEN
                const action = authActions.AUTHENTICATE_SUCCESS({
                    ...authMock.userGotToken,
                    expirationDate: new Date(2020, 1, 15)
                });
                // WHEN
                const result = reducer(initialState, action);
                // THEN
                expect(result).toMatchSnapshot();
            });
        });
        it('`AUTHENTICATE_FAIL`, should add error in the state if there is error', () => {
            // GIVEN
            const errorMessage = 'Error';
            const action = authActions.AUTHENTICATE_FAIL({ errorMessage });
            // WHEN
            const result = reducer(initialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('LOGIN/SIGNUP', () => {
        it('`LOGIN_START`, should set loading to true in state', () => {
            // GIVEN
            const action = authActions.LOGIN_START(authMock.userOnLogin);
            // WHEN
            const result = reducer(initialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    it('`SIGNUP_START`, should set Loading to false in state', () => {
        // GIVEN
        const action = authActions.SIGNUP_START(authMock.userOnRegister);
        // WHEN
        const result = reducer(initialState, action);
        // THEN
        expect(result).toMatchSnapshot();
    });

    describe('LOGOUT', () => {
        it('should user state to initial state', () => {
            // GIVEN
            const action = authActions.LOGOUT();
            // WHEN
            const result = reducer(initialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });

    describe('CLEAR_ERROR', () => {
        it('should reset state to initial state', () => {
            // GIVEN
            const action = authActions.CLEAR_ERROR();
            // WHEN
            const result = reducer(initialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });

    describe('AUTO_LOGIN', () => {
        it('should reset state to initial state', () => {
            // GIVEN
            const action = authActions.AUTO_LOGIN();
            // WHEN
            const result = reducer(initialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
});
