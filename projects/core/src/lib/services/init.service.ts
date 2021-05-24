import { Injectable } from '@angular/core';

import { I18nFacade } from '@i18n/+store/i18n.facade';

/**
 * Init Service
 * ---
 * Handles application initialization. It is also used into the hook of Angular init process.
 * An `APP_INITIALIZER` provider is set in the `internationalizationModule` which call `init` method.
 */
@Injectable()
export class InitService {
    constructor(private i18nFacade: I18nFacade) {}
    private Timeout: any;

    public init(): Promise<boolean> {
        return this.load();
    }

    private async load(): Promise<boolean> {
        this.Timeout = setTimeout(() => {
            this.i18nFacade.setLanguage('en');
        }, 300);

        return true;
    }
}

export function init(service: InitService) {
    clearTimeout(this.Timeout);
    return () => service.init();
}
