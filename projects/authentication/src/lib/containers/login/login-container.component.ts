import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../+store/app.reducer';
import { AuthFacade } from '@authentication/+store/auth.facade';

import { Subscription } from 'rxjs';

@Component({
    selector: 'lib-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}

    isLoading = false;

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.isLoading = authState.loading;
        });
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
