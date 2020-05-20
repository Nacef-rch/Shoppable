import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserOnLogin, UserOnRegister, User } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    user = new Subject<User>();

    constructor(private http: HttpClient) {}

    public checkUser(user: UserOnLogin): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/login', user).pipe(
            tap((resData) => {
                this.handleAuthentication(resData);
            }),
        );
    }
    public addUser(user: UserOnRegister): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/signup', user).pipe(
            catchError(this.handleError),
            tap((resData) => {
                this.handleAuthentication(resData);
            }),
        );
    }
    private handleAuthentication(resUser) {
        const tokenDecoded = jwtDecode(resUser.token);
        const expirationDate = new Date(+tokenDecoded.exp * 1000);
        const user = new User(tokenDecoded.email, tokenDecoded.user_id, resUser.token, expirationDate);
        this.user.next(user);
        console.log(user);
    }
    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'Something went wrong, please try again !';
        if (!errorRes.error) {
            return throwError(errorMessage);
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

        return throwError(errorMessage);
    }
}
