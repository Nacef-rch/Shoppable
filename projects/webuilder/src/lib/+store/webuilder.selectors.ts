import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WebuilderState, webuilderStoreName } from './webuilder.reducer';

export const getState = createFeatureSelector<WebuilderState>(webuilderStoreName);

export const getLogo = createSelector(getState, (state: WebuilderState) => state.logo);
export const getTheme = createSelector(getState, (state: WebuilderState) => state.theme);
export const getButton = createSelector(getState, (state: WebuilderState) => state.button);

export const webuilderQuery = {
    getLogo,
    getTheme,
    getButton
};
