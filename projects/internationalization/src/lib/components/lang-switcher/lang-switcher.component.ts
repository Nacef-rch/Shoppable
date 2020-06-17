import { Component } from '@angular/core';

import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';

@Component({
    selector: 'lib-lang-switcher',
    templateUrl: './lang-switcher.component.html',
    styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {
    constructor(public translate: I18nService, public i18nFacade: I18nFacade) {}

    onClick(): void {
        this.translate.switchLanguage();
        const currentLang = this.translate.currentLang;
        if (currentLang == 'en') {
            this.i18nFacade.setLanguage('fr');
        }
        if (currentLang == 'fr') {
            this.i18nFacade.setLanguage('en');
        }
    }
}
