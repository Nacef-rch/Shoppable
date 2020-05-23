import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { RegisterContainerComponent } from './containers/register/register-container.component';
import { LoginContainerComponent } from './containers/login/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [LoginComponent, RegisterComponent, RegisterContainerComponent, LoginContainerComponent],
    imports: [HttpClientModule, BrowserModule, CommonModule, FormsModule, AuthRoutingModule, SharedModule],
    exports: [LoginComponent, RegisterComponent],
})
export class AuthenticationModule {}
