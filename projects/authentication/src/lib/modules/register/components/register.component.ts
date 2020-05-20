import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOnRegister } from '../../../shared/models/user.model';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
    selector: 'lib-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(private auth: AuthenticationService) {}
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
            },
            (err) => {
                this.error = err;
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
