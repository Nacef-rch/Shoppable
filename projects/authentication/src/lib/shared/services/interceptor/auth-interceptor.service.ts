import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { exhaustMap, take } from 'rxjs/operators';
//Note !!!!!!!!!!!!!!!!! maybe i will have a bug with user.token => bearer missing !! add it in user model
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap((user) => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token),
                });
                return next.handle(modifiedReq);
            }),
        );
    }
}
