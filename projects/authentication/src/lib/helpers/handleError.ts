export const handleError = (errorRes: any, lang: string): string => {
    if ((lang = 'en')) {
        let errorMessage = 'Something went wrong, please try again !';

        if (!errorRes.error) {
            return errorMessage;
        }

        if (errorRes.error.email) {
            errorMessage = 'Email is already in use !';
        }

        if (errorRes.error.confirmPassword) {
            errorMessage = 'Passwords must match !';
        }

        if (errorRes.error.handle) {
            errorMessage = 'This handle is already taken !';
        }
        if (errorRes.error.general) {
            errorMessage = 'Wrong credentials, please try again !';
        }

        return errorMessage;
    } else {
        return;
    }
    if ((lang = 'fr')) {
        let errorMessage = `Quelque chose c'est mal passé. Merci d'essayer plus tard !`;

        if (!errorRes.error) {
            return errorMessage;
        }

        if (errorRes.error.email) {
            errorMessage = 'Cet email est déjà utilisé !';
        }

        if (errorRes.error.confirmPassword) {
            errorMessage = 'Les mots de passe doivent correspondre !';
        }

        if (errorRes.error.handle) {
            errorMessage = 'Cette Handle est déjà prise !';
        }
        if (errorRes.error.general) {
            errorMessage = 'Identifiants erronés, veuillez réessayer !';
        }

        return errorMessage;
    }
};
