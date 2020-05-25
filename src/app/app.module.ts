import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from 'projects/authentication/src/public-api';
import { TestComponent } from './test.component';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '@core/interceptors/authentication/auth-interceptor.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../../projects/+store/app.reducer';
import { AuthEffects } from '@authentication/+store/auth.effects';

@NgModule({
    declarations: [AppComponent, TestComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthenticationModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([AuthEffects]),
    ],

    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
