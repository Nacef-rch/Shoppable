import { handleError } from '@authentication/helpers/handleError';
describe('HandleError', () => {
    describe('HandleError on login', () => {
        it('should extract Wrong credentials, please try again ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    error: {
                        general: 'Wrong credentials, please try again !'
                    }
                },
                'en'
            );
            expect(data).toBe('Wrong credentials, please try again !');
        });
    });
    describe('HanldeError on Register', () => {
        it('should extract Email is already in use ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    error: {
                        email: 'Email is already in use !'
                    }
                },
                'en'
            );
            expect(data).toBe('Email is already in use !');
        });
        it('should extract Passwords must match ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    error: {
                        confirmPassword: 'Passwords must match !'
                    }
                },
                'en'
            );
            expect(data).toBe('Passwords must match !');
        });
        it('should extract This handle is already taken ! from response `handleError`', () => {
            const data: any = handleError(
                {
                    error: {
                        handle: 'This handle is already taken !'
                    }
                },
                'en'
            );
            expect(data).toBe('This handle is already taken !');
        });
    });
});
