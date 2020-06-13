import { CoreModule } from '@core/core.module';

describe('coreModule', () => {
    let coreModule: CoreModule;

    beforeEach(() => {
        coreModule = new CoreModule(null);
    });

    it('should create an instance', () => {
        expect(coreModule).toBeTruthy();
    });
});
