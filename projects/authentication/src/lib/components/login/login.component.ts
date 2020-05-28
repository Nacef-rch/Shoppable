import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../../../../+store/app.reducer';
import { UserOnLogin } from '@authentication/models/user.model';
import { Store } from '@ngrx/store';
import * as AuthActions from '@authentication/+store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
    selector: 'lib-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    constructor(private store: Store<fromApp.AppState>) {}
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
            password: form.value.password,
        };
        this.store.dispatch(new AuthActions.LoginStart(this.user));

        form.reset();
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.store.dispatch(new AuthActions.ClearError());
    }
}
