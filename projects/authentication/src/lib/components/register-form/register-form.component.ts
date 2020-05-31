import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';
import * as fromApp from '../../../../../+store/app.reducer';
import { UserOnRegister } from '@authentication/models/user.model';

@Component({
    selector: 'lib-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    private user: UserOnRegister;
    public error: string = null;
    public registerForm: FormGroup;

    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.error = authState.authError;
        });
        this.registerForm = new FormGroup({
            name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            handle: new FormControl(null, [Validators.required, Validators.minLength(4)])
        });
    }

    onSubmit(): void {
        if (!this.registerForm.valid) {
            return;
        }
        this.user = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            confirmPassword: this.registerForm.value.confirmPassword,
            handle: this.registerForm.value.handle
        };
        this.authFacade.SignupStart(
            this.user.name,
            this.user.email,
            this.user.password,
            this.user.confirmPassword,
            this.user.handle
        );

        this.registerForm.reset();
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.authFacade.ClearError();
    }
}
