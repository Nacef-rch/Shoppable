import { CoreModule } from '@core/core.module';

describe('coreModule', () => {
    let coreModule: CoreModule;

    beforeEach(() => {
        coreModule = new CoreModule();
    });

    it('should create an instance', () => {
        expect(coreModule).toBeTruthy();
    });
});
