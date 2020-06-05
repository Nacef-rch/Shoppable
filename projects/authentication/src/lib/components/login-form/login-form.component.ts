import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';
import { UserOnLogin } from '@authentication/models/user.model';

@Component({
    selector: 'lib-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    private user: UserOnLogin;
    public loginForm: FormGroup;
    public error: string = null;
    public hide = true;

    constructor(private authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.storeSub = this.authFacade.error$.subscribe((errorRes) => {
            this.error = errorRes;
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
