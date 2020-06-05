import jwtDecode from 'jwt-decode';
import {
    AuthResponseData,
    AuthenticateSuccessType
} from '@authentication/models/returnTypes.model';
import { User } from '@authentication/models/user.model';

export const handleAuthentication = (resData: AuthResponseData): AuthenticateSuccessType => {
    const tokenDecoded = jwtDecode(resData.token);
    const expirationDate = new Date(+tokenDecoded.exp * 1000);
    const userToken = `Bearer ${resData.token}`;
    const user = new User(tokenDecoded.email, tokenDecoded.user_id, userToken, expirationDate);
    const userSuccess: AuthenticateSuccessType = {
        email: tokenDecoded.email,
        userId: tokenDecoded.user_id,
        token: userToken,
        expirationDate: expirationDate,
        redirect: true
    };
    localStorage.setItem('userData', JSON.stringify(user));
    return userSuccess;
};
