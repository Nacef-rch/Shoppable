import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserOnLogin, UserOnRegister } from '../models/user.model';
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    public checkUser(user: UserOnLogin): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/login', user);
    }
    public addUser(user: UserOnRegister): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/signup', user);
    }
}
