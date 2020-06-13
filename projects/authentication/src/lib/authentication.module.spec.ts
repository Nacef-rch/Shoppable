import { AuthenticationModule } from '@authentication/authentication.module';

describe('authModule', () => {
    let authModule: AuthenticationModule;

    beforeEach(() => {
        authModule = new AuthenticationModule();
    });

    it('should create an instance', () => {
        expect(authModule).toBeTruthy();
    });
});
