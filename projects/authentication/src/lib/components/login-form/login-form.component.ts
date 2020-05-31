import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthFacade } from '@authentication/+store/auth.facade';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../../../../../+store/app.reducer';
import { UserOnLogin } from '@authentication/models/user.model';

@Component({
    selector: 'lib-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    public loginForm: FormGroup;
    private user: UserOnLogin;
    public error: string = null;

    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.error = authState.authError;
        });
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    public onSubmit(): void {
        if (!this.loginForm.valid) {
            return;
        }
        this.user = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.authFacade.LoginStart(this.user.email, this.user.password);

        this.loginForm.reset();
    }
    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.authFacade.ClearError();
    }
}
