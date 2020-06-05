import { InternationalizationModule } from '@i18n/internationalization.module';

describe('InternationalizationModule', () => {
    let intModule: InternationalizationModule;

    beforeEach(() => {
        intModule = new InternationalizationModule();
    });

    it('should create an instance', () => {
        expect(intModule).toBeTruthy();
    });
});
