import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { UserOnRegister } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

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

    onSubmit(form: NgForm): void {
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
            () => {
                this.isLoading = false;
                //TODO: change route to products route for V1
                this.router.navigate(['/test']);
            },
            (err) => {
                this.error = err;
                this.isLoading = false;
            },
        );

        form.reset();
    }
}
