import { Action, createReducer, on } from '@ngrx/store';
import { Logo } from '@webuilder/models/webuilder.model';
import * as webActions from '@webuilder/+store/webuilder.actions';

export interface WebuilderState {
    logo: Logo;
}
export interface WebuilderStore {
    readonly state: WebuilderState;
}

export const initialState: WebuilderState = {
    logo: {
        text: 'Site Titre',
        color: '#000000',
        style: ['header-title-text']
    }
};
const reducer = createReducer(
    initialState,

    on(webActions.ADD_LOGO, (state, action) => ({
        ...state,
        logo: action.logo
    }))
);
export function webuilderReducer(
    state: WebuilderState | undefined,
    action: Action
): WebuilderState {
    return reducer(state, action);
}

export const webuilderStoreName = 'webuilderStore';
