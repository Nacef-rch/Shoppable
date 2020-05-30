import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginContainerComponent } from './containers/login/login-container.component';
import { CommonModule } from '@angular/common';

import { RegisterContainerComponent } from './containers/register/register-container.component';
import { SharedModule } from '@shared/shared.module';

import { FormComponent } from './components/login/login-form/form.component';
import { LoginSocialComponent } from './components/login/social/login-social.component';
import { RegisterFormComponent } from './components/register/form/register-form.component';

@NgModule({
    declarations: [
        LoginContainerComponent,

        RegisterContainerComponent,
        FormComponent,
        LoginSocialComponent,
        RegisterFormComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AuthRoutingModule,
        FormsModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [LoginContainerComponent, RegisterContainerComponent]
})
export class AuthenticationModule {}
