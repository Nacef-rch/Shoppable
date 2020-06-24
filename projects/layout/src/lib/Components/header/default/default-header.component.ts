import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';
import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';

@Component({
    selector: 'lib-default-header',
    templateUrl: './default-header.component.html',
    styleUrls: ['./default-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultHeaderComponent {
    public productQuantity$: Observable<number> = this.prodFacade.cartQuantity$;
    lang = 'EN';
    constructor(
        private prodFacade: ProductFacade,
        public translate: I18nService,
        public i18nFacade: I18nFacade
    ) {}

    onClick(): void {
        this.translate.switchLanguage();
        const currentLang = this.translate.currentLang;
        if (currentLang == 'en') {
            this.i18nFacade.setLanguage('fr');
            this.lang = 'FR';
        }
        if (currentLang == 'fr') {
            this.i18nFacade.setLanguage('en');
            this.lang = 'EN';
        }
    }
}
