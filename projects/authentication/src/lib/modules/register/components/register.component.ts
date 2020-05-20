import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOnRegister } from '../../../shared/models/user.model';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'lib-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(private auth: AuthenticationService, private router: Router) {}
    user: UserOnRegister;
    isLoading = false;
    error: string = null;

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        this.user = {
            name: form.value.name,
            email: form.value.email,
            password: form.value.password,
            confirmPassword: form.value.confirmPassword,
            handle: form.value.handle,
        };
        this.isLoading = true;
        this.auth.addUser(this.user).subscribe(
            (res) => {
                this.isLoading = false;
                //TODO: change route to products route for V1
                this.router.navigate(['']);
            },
            (err) => {
                this.error = err;
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
