import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';
import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoreFacade } from '@store/+store/store.facade';

@Component({
    selector: 'lib-default-header',
    templateUrl: './default-header.component.html',
    styleUrls: ['./default-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultHeaderComponent implements OnInit, OnDestroy {
    public productQuantity$: Observable<number> = this.prodFacade.cartQuantity$;
    public paramsSubscription: Subscription;

    lang = 'EN';
    public storeId: string;
    constructor(
        private prodFacade: ProductFacade,
        public translate: I18nService,
        public i18nFacade: I18nFacade,
        private router: Router,
        private route: ActivatedRoute,
        private storeFacade: StoreFacade
    ) {}

    public ngOnInit(): void {
        this.paramsSubscription = this.route.params.subscribe((params: Params) => {
            console.log(params);
            this.storeId = params['store'];
        });
        this.storeFacade.setActiveStore(this.storeId);
    }
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
    goToCart(): void {
        this.router.navigate([`${this.storeId}/shop/cart`]);

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}
