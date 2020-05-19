import { Injectable } from '@angular/core';
import { UserOnLogin } from '../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) {}

    public addUSer(user: UserOnLogin): Observable<any> {
        return this.http.post('https://europe-west1-kila-2352b.cloudfunctions.net/api/login', user);
    }
}
