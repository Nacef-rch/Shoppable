import { DashboardModule } from '@admin/dashboard.module';

describe('InternationalizationModule', () => {
    let dashboardModule: DashboardModule;

    beforeEach(() => {
        dashboardModule = new DashboardModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
