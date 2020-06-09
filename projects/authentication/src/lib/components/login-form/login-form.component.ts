import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { AuthFacade } from '@authentication/+store/auth.facade';
import { UserOnLogin } from '@authentication/models/user.model';

@Component({
    selector: 'lib-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    private user: UserOnLogin;
    public loginForm: FormGroup;
    public hide = true;

    constructor(private authFacade: AuthFacade) {}

    public ngOnInit(): void {
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
        this.authFacade.loginStart(this.user.email, this.user.password);

        this.loginForm.reset();
    }
    public ngOnDestroy(): void {
        this.authFacade.clearError();
    }
}
