import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from '@authentication/auth-routing.module';
import * as fromAuth from '@authentication/+store/auth.reducer';
import { AuthEffects } from '@authentication/+store/auth.effects';
import { LoginContainerComponent } from '@authentication/containers/login/login-container.component';
import { RegisterContainerComponent } from '@authentication/containers/register/register-container.component';
import { SocialAuthComponent } from '@authentication/components/social-auth/social-auth.component';
import { LoginFormComponent } from '@authentication/components/login-form/login-form.component';
import { RegisterFormComponent } from '@authentication/components/register-form/register-form.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { initialState } from '@authentication/+store/auth.reducer';

@NgModule({
    declarations: [
        LoginContainerComponent,
        RegisterContainerComponent,
        SocialAuthComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],
    imports: [
        AuthRoutingModule,
        SharedModule,
        StoreModule.forFeature(fromAuth.authStoreName, fromAuth.authReducer, {
            initialState: initialState
        }),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    exports: [LoginContainerComponent, RegisterContainerComponent]
})
export class AuthenticationModule {}
