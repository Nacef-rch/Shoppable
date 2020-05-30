export const handleError = (errorRes: any): string => {
    let errorMessage = 'Something went wrong, please try again !';
    if (!errorRes.error) {
        return errorMessage;
    }
    if (errorRes.error.name) {
        errorMessage = 'Must not be empty';
    }
    if (errorRes.error.email) {
        switch (errorRes.error.email) {
            case 'Must not be empty':
                errorMessage = 'Must not be empty';
                break;
            case 'Email is already in use':
                errorMessage = 'Email is already in use';
        }
    }
    if (errorRes.error.password) {
        errorMessage = 'Must not be empty';
    }
    if (errorRes.error.confirmPassword) {
        errorMessage = 'Passwords must match';
    }

    if (errorRes.error.handle) {
        switch (errorRes.error.handle) {
            case 'Must not be empty':
                errorMessage = 'Must not be empty';
                break;
            case 'this handle is already taken':
                errorMessage = 'This handle is already taken';
        }
    }
    if (errorRes.error.general) {
        errorMessage = 'Something went wrong, please try again !';
    }

    return errorMessage;
};
