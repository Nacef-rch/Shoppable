import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserOnLogin } from '../../models/user.model';

@Component({
    selector: 'lib-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private auth: AuthenticationService, private router: Router) {}
    user: UserOnLogin;
    isLoading = false;
    error: string = null;

    onSubmit(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        this.user = {
            email: form.value.email,
            password: form.value.password,
        };
        this.isLoading = true;

        this.auth.checkUser(this.user).subscribe(
            () => {
                this.isLoading = false;
                //TODO: change route to products route for V1
                this.router.navigate(['/test']);
            },
            (err) => {
                this.error = err.error.general;
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
