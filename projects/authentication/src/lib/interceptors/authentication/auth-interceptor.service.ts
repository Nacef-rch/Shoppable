/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';

import { exhaustMap, take } from 'rxjs/operators';

import { AuthFacade } from '@authentication/+store/auth.facade';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authFacade: AuthFacade) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authFacade.user$.pipe(
            take(1),
            exhaustMap((user) => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                });
                return next.handle(modifiedReq);
            })
        );
    }
}
