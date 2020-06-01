import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    userTest;
    constructor(private router: Router, private authFacade: AuthFacade) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authFacade.user$.pipe(
            take(1),
            map((user) => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['auth/login']);
            })
        );
    }
}
