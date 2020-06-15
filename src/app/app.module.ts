import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '@env/environment';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getTranslateModuleInstance } from '@i18n/helpers/i18n.helper';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModule } from '@product/product.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '@authentication/interceptors/auth-interceptor.service';
import { AuthenticationModule } from '@authentication/authentication.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        getTranslateModuleInstance(TranslateModule.forRoot),
        AppRoutingModule,
        StoreModule.forRoot(
            {},

            {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false
                }
            }
        ),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule,
        ProductModule,
        AuthenticationModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],

    bootstrap: [AppComponent]
})
export class AppModule {}
