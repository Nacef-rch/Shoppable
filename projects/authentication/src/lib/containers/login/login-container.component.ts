import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    public isLoading = false;
    // public isLoading$ = observable<false>; pipe asycn as is loading fel htmp !!!
    constructor(private authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.storeSub = this.authFacade.loading$.subscribe((loadRes) => {
            this.isLoading = loadRes;
        });
    }
    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
