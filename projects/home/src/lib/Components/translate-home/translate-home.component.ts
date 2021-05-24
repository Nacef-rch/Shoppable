import { Component } from '@angular/core';
import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';

@Component({
    selector: 'lib-translate-home',
    templateUrl: './translate-home.component.html',
    styleUrls: ['./translate-home.component.scss']
})
export class TranslateHomeComponent {
    constructor(public translate: I18nService, public i18nFacade: I18nFacade) {}

    lang = 'EN';

    onClick(langu: string): void {
        const currentLang = this.translate.currentLang;
        if (langu == 'fr' && currentLang == 'en') {
            this.translate.switchLanguage();
            this.i18nFacade.setLanguage('fr');
            this.lang = 'FR';
        }
        if (langu == 'en' && currentLang == 'fr') {
            this.translate.switchLanguage();
            this.i18nFacade.setLanguage('en');
            this.lang = 'EN';
        }
    }
}
