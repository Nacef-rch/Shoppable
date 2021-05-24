import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-error-auth',
    templateUrl: './error-auth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorAuthComponent implements OnDestroy {
    private storeSub: Subscription;
    public error$: Observable<string> = this.authFacade.error$;

    constructor(private authFacade: AuthFacade) {}

    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
