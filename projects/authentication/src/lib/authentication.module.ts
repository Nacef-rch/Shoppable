import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/login/components/login.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
    declarations: [LoginComponent, LoadingSpinnerComponent],
    imports: [HttpClientModule, BrowserModule, CommonModule, FormsModule],
    exports: [LoginComponent],
})
export class AuthenticationModule {}
