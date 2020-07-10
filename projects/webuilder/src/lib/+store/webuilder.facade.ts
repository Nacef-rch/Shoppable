import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as webActions from '@webuilder/+store/webuilder.actions';

import { WebuilderStore } from '@webuilder/+store/webuilder.reducer';
import { webuilderQuery } from '@webuilder/+store/webuilder.selectors';
import { Logo, ThemeWeb, ButtonsWeb } from '@webuilder/models/webuilder.model';

@Injectable({
    providedIn: 'root'
})
export class WebuilderFacade {
    public logo$ = this.store.select(webuilderQuery.getLogo);
    public theme$ = this.store.select(webuilderQuery.getTheme);
    public button$ = this.store.select(webuilderQuery.getButton);
    public text$ = this.store.select(webuilderQuery.getText);

    constructor(private store: Store<WebuilderStore>) {}

    public addLogo(logo: Logo): void {
        this.store.dispatch(webActions.ADD_LOGO({ logo: logo }));
    }
    public addTheme(theme: ThemeWeb): void {
        this.store.dispatch(webActions.ADD_THEME({ theme: theme }));
    }
    public addButton(button: ButtonsWeb): void {
        this.store.dispatch(webActions.ADD_BUTTONS({ button: button }));
    }
}
