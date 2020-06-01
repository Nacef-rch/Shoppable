export const handleError = (errorRes: any): string => {
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
};
