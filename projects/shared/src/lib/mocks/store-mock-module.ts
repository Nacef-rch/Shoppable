import { NgModule } from '@angular/core';

import * as fromAuth from '@authentication/+store/auth.reducer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';

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
        StoreModule.forFeature(fromAuth.authStoreName, fromAuth.authReducer, {
            initialState: fromAuth.initialState
        }),

        EffectsModule.forRoot([])
    ],
    exports: [StoreModule, EffectsModule]
})
export class StoreMockModule {}
