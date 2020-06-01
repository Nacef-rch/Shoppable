import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthFacade } from '@authentication/+store/auth.facade';

import { Subscription } from 'rxjs';

@Component({
    selector: 'lib-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit, OnDestroy {
    private storeSub: Subscription;
    constructor(private authFacade: AuthFacade) {}

    isLoading = false;

    ngOnInit(): void {
        this.storeSub = this.authFacade.loading$.subscribe((loadRes) => {
            this.isLoading = loadRes;
        });
    }
    ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
