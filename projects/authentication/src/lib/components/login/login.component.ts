import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../../../../+store/app.reducer';
import { UserOnLogin } from '@authentication/models/user.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}
    user: UserOnLogin;
    isLoading = false;
    error: string = null;

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
        });
    }

    onSubmit(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        this.user = {
            email: form.value.email,
            password: form.value.password
        };
        this.authFacade.LoginStart(this.user.email, this.user.password);

        form.reset();
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.authFacade.ClearError();
    }
}
