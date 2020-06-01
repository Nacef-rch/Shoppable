import { NgModule } from '@angular/core';

import { I18nModule } from './services/i18n/i18n.module';

@NgModule({
    declarations: [],
    imports: [I18nModule],
    exports: [I18nModule]
})
export class CoreModule {}
