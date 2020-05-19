import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Snow {
    name: '';
    gender: '';
    culture: '';
    born: '';
}

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}
    Jon: Snow = {
        name: '',
        gender: '',
        culture: '',
        born: '',
    };
    fetchSnow(): Observable<any> {
        return this.http.get('https://www.anapioficeandfire.com/api/characters/583');
    }
}
