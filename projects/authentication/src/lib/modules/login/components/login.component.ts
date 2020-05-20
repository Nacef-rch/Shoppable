import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOnLogin } from '../../../shared/models/user.model';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
    selector: 'lib-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private auth: AuthenticationService) {}
    user: UserOnLogin;
    isLoading = false;
    error: string = null;

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        this.user = {
            email: form.value.email,
            password: form.value.password,
        };
        this.isLoading = true;

        this.auth.checkUser(this.user).subscribe(
            (res) => {
                this.isLoading = false;
            },
            (err) => {
                this.error = err.error.general;
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
