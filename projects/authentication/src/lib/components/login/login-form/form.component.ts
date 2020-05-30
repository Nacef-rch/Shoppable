import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromApp from '../../../../../../+store/app.reducer';
import { UserOnLogin } from '@authentication/models/user.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthFacade } from '@authentication/+store/auth.facade';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    loginForm: FormGroup;
    constructor(private store: Store<fromApp.AppState>, private authFacade: AuthFacade) {}
    user: UserOnLogin;
    error: string = null;

    ngOnInit(): void {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.error = authState.authError;
        });
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    onSubmit(): void {
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
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
        this.authFacade.ClearError();
    }
}
