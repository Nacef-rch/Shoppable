import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@authentication/+store/auth.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private authFacade: AuthFacade) {}
    ngOnInit() {
        this.authFacade.AutoLogin();
    }
    title = 'Shoppable';
}
