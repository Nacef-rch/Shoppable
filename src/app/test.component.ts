import { Component } from '@angular/core';

import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./app.component.scss']
})
export class TestComponent {
    constructor(private authFacade: AuthFacade) {}
    public onClick(): void {
        this.authFacade.Logout();
    }
}
