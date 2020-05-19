import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from './authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/login/components/login.component';

@NgModule({
    declarations: [AuthenticationComponent, LoginComponent],
    imports: [HttpClientModule, BrowserModule, CommonModule],
    exports: [AuthenticationComponent, LoginComponent],
})
export class AuthenticationModule {}
