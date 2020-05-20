import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from 'projects/authentication/src/public-api';
import { TestComponent } from './test.component';

@NgModule({
    declarations: [AppComponent, TestComponent],
    imports: [BrowserModule, AppRoutingModule, AuthenticationModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
