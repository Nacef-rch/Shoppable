import { Injectable } from '@angular/core';
import { AuthFacade } from '@authentication/+store/auth.facade';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private tokenExpirationTimer: any;

    constructor(private authFacade: AuthFacade) {}

    setLogoutTimer(expirationDuration: number): void {
        this.tokenExpirationTimer = setTimeout(() => {
            this.authFacade.Logout();
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
}
