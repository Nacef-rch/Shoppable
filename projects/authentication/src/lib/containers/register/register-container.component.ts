import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'lib-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnDestroy {
    private storeSub: Subscription;
    public isLoading$: Observable<boolean> = this.authFacade.loading$;
    constructor(private authFacade: AuthFacade) {}

    public ngOnDestroy(): void {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}
