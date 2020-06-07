export const handleError = (errorRes: any, lang: string): string => {
    const errMsgValue: any = Object.values(errorRes.message);
    const errMsgKey: any = Object.keys(errorRes.message).toString();

    if (lang === 'en') {
        const errorMessage = 'Something went wrong, please try again !';
        if (!errMsgValue) {
            return errorMessage;
        }

        return errMsgValue;
    }
    if (lang === 'fr') {
        let errorMessage = `Quelque chose c'est mal passé. Merci d'essayer plus tard !`;

        if (!errMsgValue) {
            return errorMessage;
        }

        if (errMsgKey == 'email') {
            errorMessage = 'Cet email est déjà utilisé !';
        }

        if (errMsgKey == 'confirmPassword') {
            errorMessage = 'Les mots de passe doivent correspondre !';
        }

        if (errMsgKey == 'handle') {
            errorMessage = 'Cette Handle est déjà prise !';
        }
        if (errMsgKey == 'general') {
            errorMessage = 'Identifiants erronés, veuillez réessayer !';
        }

        return errorMessage;
    }
};
