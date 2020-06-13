import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authFacade: AuthFacade) {}
    canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authFacade.user$.pipe(
            take(1),
            map((user) => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                this.router.createUrlTree(['auth/login']);
                return false;
            })
        );
    }
}
