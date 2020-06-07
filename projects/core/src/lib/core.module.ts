import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { InitService, init } from '@core/services/init.service';
import { throwIfAlreadyLoaded } from '@i18n/helpers/module-import.helper';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [],
    imports: [SharedModule],
    exports: [],
    providers: [
        InitService,
        {
            provide: APP_INITIALIZER,
            deps: [InitService],
            useFactory: init,
            multi: true
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Enforce Core Module is load only in the App Module.
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
