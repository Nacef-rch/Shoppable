import { TestBed } from '@angular/core/testing';

import { I18nFacade } from '@i18n/+store/i18n.facade';
import { I18nService } from '@i18n/services/i18n.service';
import { InitService } from '@core/services/init.service';
import { StoreMockModule } from '@core/mocks/store-mock-module';

describe('InitService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreMockModule],
            providers: [
                I18nFacade,
                InitService,
                {
                    provide: I18nService,
                    useValue: { setLanguage: (key) => key }
                }
            ]
        });
    });

    it('should be created', () => {
        const service: InitService = TestBed.inject(InitService);
        expect(service).toBeTruthy();
    });
});
