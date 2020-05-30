import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../../../+store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit, OnDestroy {
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
