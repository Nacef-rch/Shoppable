import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit, OnDestroy {
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
