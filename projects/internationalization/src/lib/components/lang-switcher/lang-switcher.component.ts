import { Component } from '@angular/core';

import { I18nService } from '@i18n/services/i18n.service';

@Component({
    selector: 'lib-lang-switcher',
    templateUrl: './lang-switcher.component.html',
    styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {
    constructor(public translate: I18nService) {}

    onClick(): void {
        this.translate.switchLanguage();
    }
}
