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
    public isLoading = false;

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
