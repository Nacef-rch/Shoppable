import { SharedModule } from '@shared/shared.module';

describe('InternationalizationModule', () => {
    let sharedModule: SharedModule;

    beforeEach(() => {
        sharedModule = new SharedModule();
    });

    it('should create an instance', () => {
        expect(sharedModule).toBeTruthy();
    });
});
