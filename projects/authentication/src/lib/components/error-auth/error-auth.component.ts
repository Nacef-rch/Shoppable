import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-error-auth',
    template: '<notifier-container></notifier-container>'
})
export class ErrorAuthComponent implements OnInit, OnDestroy {
    private notifier: NotifierService;
    private storeSub: Subscription;
    public error: string = null;

    constructor(private authFacade: AuthFacade, notifier: NotifierService) {
        this.notifier = notifier;
    }

    public ngOnInit(): void {
        this.storeSub = this.authFacade.error$.subscribe((errorRes) => {
            this.error = errorRes;
        });
        if (this.error) {
            this.notifier.notify('error', this.error);
        }
    }
    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
