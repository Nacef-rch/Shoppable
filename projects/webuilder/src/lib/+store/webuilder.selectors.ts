import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WebuilderState, webuilderStoreName } from './webuilder.reducer';

export const getState = createFeatureSelector<WebuilderState>(webuilderStoreName);

export const getLogo = createSelector(getState, (state: WebuilderState) => state.logo);

export const webuilderQuery = {
    getLogo
};
