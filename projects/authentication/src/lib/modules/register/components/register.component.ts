import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOnRegister } from '../../../shared/models/user.model';

@Component({
    selector: 'lib-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    user: UserOnRegister;
    isLoading = false;
    //error: string = null;

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        // this.user = {
        //     email: form.value.email,
        //     password: form.value.password,
        // };
        this.isLoading = true;

        form.reset();
    }
}
