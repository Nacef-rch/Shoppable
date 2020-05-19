import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from './authentication.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationDirective } from './authentication.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AuthenticationComponent, TestComponent, AuthenticationDirective],
    imports: [HttpClientModule, BrowserModule, CommonModule],
    exports: [AuthenticationComponent, TestComponent],
})
export class AuthenticationModule {}
