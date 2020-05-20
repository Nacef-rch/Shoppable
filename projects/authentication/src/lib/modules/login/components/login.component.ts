import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOnLogin } from '../../../shared/models/user.model';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';

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
