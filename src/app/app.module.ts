import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '@authentication/interceptors/authentication/auth-interceptor.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../../projects/+store/app.reducer';
import { AuthEffects } from '@authentication/+store/auth.effects';
import { environment } from '@env/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [AppComponent, TestComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        //AuthenticationModule,

        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([AuthEffects]),
        StoreDevtoolsModule.instrument({ logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot()
    ],

    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule {}
