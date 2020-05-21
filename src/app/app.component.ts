import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'projects/authentication/src/lib/shared/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthenticationService) {}
    ngOnInit() {
        this.authService.autoLogin();
    }
    title = 'Shoppable';
}
