import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '@env/environment';

import { i18nReducer, i18nStoreName } from '@i18n/+store/i18n.reducer';

import { authStoreName, authReducer } from '@authentication/+store/auth.reducer';

export interface State {
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export function mockReducer(actionReducer: ActionReducer<any>): ActionReducer<any> {
    return (state: any, action: any): any => {
        return actionReducer(state, action);
    };
}

export const metaReducers: Array<MetaReducer<any>> = !environment.production ? [mockReducer] : [];

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreModule.forFeature(i18nStoreName, i18nReducer),
        StoreModule.forFeature(authStoreName, authReducer),
        EffectsModule.forRoot([])
    ],
    providers: [],
    exports: [StoreModule, EffectsModule]
})
export class StoreMockModule {}
