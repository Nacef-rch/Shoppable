import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, authStoreName } from '@authentication/+store/auth.reducer';

export const getState = createFeatureSelector<State>(authStoreName);

export const getUser = createSelector(getState, (authState: State) => authState.user);
export const getAuthError = createSelector(getState, (authState: State) => authState.authError);
export const getLoading = createSelector(getState, (authState: State) => authState.loading);

export const authQuery = {
    getState,
    getUser,
    getAuthError,
    getLoading
};
