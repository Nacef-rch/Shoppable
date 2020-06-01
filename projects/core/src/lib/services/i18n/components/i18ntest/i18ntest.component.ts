import { Component } from '@angular/core';

import { I18nService } from '../../services/i18n.service';

@Component({
    selector: 'lib-i18ntest',
    templateUrl: './i18ntest.component.html',
    styleUrls: ['./i18ntest.component.scss']
})
export class I18ntestComponent {
    constructor(public translate: I18nService) {}
    onClick() {
        this.translate.switchLanguage();
    }
}
