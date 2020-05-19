import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from './authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AuthenticationComponent],
    imports: [HttpClientModule, BrowserModule, CommonModule],
    exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
