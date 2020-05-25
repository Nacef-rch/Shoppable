import * as fromAuth from '@authentication/+store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
};
