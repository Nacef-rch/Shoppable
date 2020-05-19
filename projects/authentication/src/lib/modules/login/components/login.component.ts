import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { UserOnLogin } from '../../../shared/models/user.model';

@Component({
    selector: 'lib-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private loginService: LoginService) {}
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

        this.loginService.addUSer(this.user).subscribe(
            (res) => {
                console.log(JSON.stringify(res));
                this.isLoading = false;
            },
            (err) => {
                this.error = err.error.general;
                console.log(JSON.stringify(err.error.general));
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
