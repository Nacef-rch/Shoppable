import { Injectable } from '@angular/core';
import { Observable, onErrorResumeNext } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserOnLogin, UserOnRegister } from '../models/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    public checkUser(user: UserOnLogin): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/login', user);
    }
    public addUser(user: UserOnRegister): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/signup', user).pipe(
            catchError((err) => {
                let errorMessage = 'An unknown error occurred!';
                if (!err.error) {
                    return throwError(errorMessage);
                }
                if (err.error.handle) {
                    switch (err.error.handle) {
                        case 'Must not be empty':
                            errorMessage = 'Must not be empty';
                            break;
                        case 'this handle is already taken':
                            errorMessage = 'This handle is already taken';
                    }
                }
                if (err.error.email) {
                    switch (err.error.email) {
                        case 'Must not be empty':
                            errorMessage = 'Must not be empty';
                            break;
                        case 'Email is already in use':
                            errorMessage = 'Email is already in use';
                    }
                }
                if (err.error.name) {
                    errorMessage = 'Must not be empty';
                }
                if (err.error.password) {
                    errorMessage = 'Must not be empty';
                }
                if (err.error.confirmPassword) {
                    errorMessage = 'Passwords must match';
                }
                if (err.error.general) {
                    errorMessage = 'Something went wrong, please try again !';
                }
                return throwError(errorMessage);
            }),
        );
    }
}
