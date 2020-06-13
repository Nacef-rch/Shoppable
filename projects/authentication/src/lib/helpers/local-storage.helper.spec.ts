import { handleAuthentication } from '@authentication/helpers/local-storage.helper';
import * as authMock from '@authentication/mocks/auth.mock.json';

describe('handleAuthentication', () => {
    it('should decode the token and give a user object', () => {
        localStorage.clear();
        const data: any = handleAuthentication(authMock.Token);
        const dataRes: any = {
            ...authMock.userGotToken,
            expirationDate: new Date(1591611590 * 1000)
        };

        expect(data).toStrictEqual(dataRes);
    });
});

describe('local-storage dummy', () => {
    it('local-storage dummy', () => {
        expect(true).toBe(true);
    });
});
