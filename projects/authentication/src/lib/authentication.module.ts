import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/login/components/login.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { RegisterComponent } from './modules/register/components/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [LoginComponent, LoadingSpinnerComponent, RegisterComponent],
    imports: [HttpClientModule, BrowserModule, CommonModule, FormsModule, AuthRoutingModule],
    exports: [LoginComponent, RegisterComponent, LoadingSpinnerComponent],
})
export class AuthenticationModule {}
