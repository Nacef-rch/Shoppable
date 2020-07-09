import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as webActions from '@webuilder/+store/webuilder.actions';

import { WebuilderStore } from '@webuilder/+store/webuilder.reducer';
import { webuilderQuery } from '@webuilder/+store/webuilder.selectors';
import { Logo } from '@webuilder/models/webuilder.model';

@Injectable({
    providedIn: 'root'
})
export class WebuilderFacade {
    public logo$ = this.store.select(webuilderQuery.getLogo);

    constructor(private store: Store<WebuilderStore>) {}

    public addLogo(logo: Logo): void {
        this.store.dispatch(webActions.ADD_LOGO({ logo: logo }));
    }
}
