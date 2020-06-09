import { handleError } from '@authentication/helpers/handleError';

describe('HandleError', () => {
    describe('HandleError on login', () => {
        it('should extract Wrong credentials, please try again ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    message: {
                        general: 'Wrong credentials, please try again !'
                    }
                },
                'en'
            );
            expect(data).toStrictEqual(['Wrong credentials, please try again !']);
        });
    });

    describe('HanldeError on Register', () => {
        it('should extract Email is already in use ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    message: {
                        email: 'Email is already in use !'
                    }
                },
                'en'
            );
            expect(data).toStrictEqual(['Email is already in use !']);
        });

        it('should extract Passwords must match ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    message: {
                        confirmPassword: 'Passwords must match !'
                    }
                },
                'en'
            );
            expect(data).toStrictEqual(['Passwords must match !']);
        });

        it('should extract This handle is already taken ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    message: {
                        handle: 'This handle is already taken !'
                    }
                },
                'en'
            );
            expect(data).toStrictEqual(['This handle is already taken !']);
        });
    });
});
