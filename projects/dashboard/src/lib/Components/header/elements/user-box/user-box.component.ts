import { Component } from '@angular/core';

import { ThemeOptions } from '@dash/constants/theme-options';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'app-user-box',
    templateUrl: './user-box.component.html'
})
export class UserBoxComponent {
    constructor(public globals: ThemeOptions, public authFacade: AuthFacade) {}

    public logout(): void {
        this.authFacade.logout();
    }
}
