import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent implements OnDestroy {
    private storeSub: Subscription;
    public isLoading$: Observable<boolean> = this.authFacade.loading$;
    constructor(private authFacade: AuthFacade) {}

    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
