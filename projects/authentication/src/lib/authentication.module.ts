import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

import { LoginContainerComponent } from './containers/login/login-container.component';
import { RegisterContainerComponent } from './containers/register/register-container.component';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '@authentication/+store/auth.reducer';
import { AuthEffects } from './+store/auth.effects';
import { EffectsModule } from '@ngrx/effects';

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
        StoreModule.forFeature(fromAuth.authStoreName, fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [LoginContainerComponent, RegisterContainerComponent]
})
export class AuthenticationModule {}
