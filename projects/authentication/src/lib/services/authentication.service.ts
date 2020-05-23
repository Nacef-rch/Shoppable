import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserOnLogin, UserOnRegister, User } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    user = new BehaviorSubject<User>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public checkUser(user: UserOnLogin): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/login', user).pipe(
            tap((resData) => {
                this.handleAuthentication(resData);
            }),
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public addUser(user: UserOnRegister): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/signup', user).pipe(
            catchError(this.handleError),
            tap((resData) => {
                this.handleAuthentication(resData);
            }),
        );
    }
    private handleAuthentication(resUser): void {
        const tokenDecoded = jwtDecode(resUser.token);
        const expirationDate = new Date(+tokenDecoded.exp * 1000);
        const userToken = `Bearer ${resUser.token}`;
        const user = new User(tokenDecoded.email, tokenDecoded.user_id, userToken, expirationDate);
        this.user.next(user);
        this.autoLogout(tokenDecoded.exp * 1000 - new Date().getTime());
        localStorage.setItem('userData', JSON.stringify(user));
        console.log(user);
    }

    autoLogin(): void {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate),
        );

        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout(): void {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
    }

    autoLogout(expirationDuration: number): void {
        console.log(expirationDuration);
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
