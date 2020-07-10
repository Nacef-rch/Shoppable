import { Action, createReducer, on } from '@ngrx/store';
import { Logo, ThemeWeb, ButtonsWeb, TextWeb } from '@webuilder/models/webuilder.model';
import * as webActions from '@webuilder/+store/webuilder.actions';
import { TEXT_WEB } from '@webuilder/constants/text-constants';

export interface WebuilderState {
    logo: Logo;
    theme: ThemeWeb;
    button: ButtonsWeb;
    text: TextWeb;
}
export interface WebuilderStore {
    readonly state: WebuilderState;
}

export const initialState: WebuilderState = {
    logo: {
        text: 'Site Titre',
        color: '#000000',
        style: ['header-title-text']
    },
    theme: {
        mainColor: 'white',
        secondColor: '#84a9ac',
        thirdColor: 'black'
    },
    button: {
        style: ['']
    },
    text: TEXT_WEB
};
const reducer = createReducer(
    initialState,

    on(webActions.ADD_LOGO, (state, action) => ({
        ...state,
        logo: action.logo
    })),
    on(webActions.ADD_THEME, (state, action) => ({
        ...state,
        theme: action.theme
    })),
    on(webActions.ADD_BUTTONS, (state, action) => ({
        ...state,
        button: action.button
    }))
);
export function webuilderReducer(
    state: WebuilderState | undefined,
    action: Action
): WebuilderState {
    return reducer(state, action);
}

export const webuilderStoreName = 'webuilderStore';
