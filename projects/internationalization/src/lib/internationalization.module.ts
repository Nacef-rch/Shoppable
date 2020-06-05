import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { I18nEffects } from '@i18n/+store/i18n.effects';
import { i18nInitialState, i18nReducer, i18nStoreName } from '@i18n/+store/i18n.reducer';
import { getTranslateModuleInstance } from '@i18n/helpers/i18n.helper';
import { I18nService } from '@i18n/services/i18n.service';
import { LangSwitcherComponent } from '@i18n/components/lang-switcher/lang-switcher.component';
import { InitService, init } from '@i18n/services/init.service';
import { throwIfAlreadyLoaded } from './helpers/module-import.helper';
@NgModule({
    declarations: [LangSwitcherComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        getTranslateModuleInstance(),

        StoreModule.forFeature(i18nStoreName, i18nReducer, { initialState: i18nInitialState }),
        EffectsModule.forFeature([I18nEffects])
    ],
    providers: [
        I18nService,
        I18nEffects,

        {
            provide: APP_INITIALIZER,
            deps: [InitService],
            useFactory: init,
            multi: true
        }
    ],
    exports: [TranslateModule, LangSwitcherComponent]
})
export class InternationalizationModule {
    // constructor(@Optional() @SkipSelf() parentModule: InternationalizationModule) {
    //     // Enforce Core Module is load only in the App Module.
    //     throwIfAlreadyLoaded(parentModule, 'InternationalizationModule');
    // }
}
