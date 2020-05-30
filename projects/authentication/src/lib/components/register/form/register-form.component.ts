import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../../../../../+store/app.reducer';
import { UserOnRegister } from '@authentication/models/user.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;

    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}
    user: UserOnRegister;
    error: string = null;

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.error = authState.authError;
        });
    }

    onSubmit(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        this.user = {
            name: form.value.name,
            email: form.value.email,
            password: form.value.password,
            confirmPassword: form.value.confirmPassword,
            handle: form.value.handle
        };
        this.authFacade.SignupStart(
            this.user.name,
            this.user.email,
            this.user.password,
            this.user.confirmPassword,
            this.user.handle
        );

        form.reset();
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.authFacade.ClearError();
    }
}
