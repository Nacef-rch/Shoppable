import { Component, OnInit } from '@angular/core';

import { AuthFacade } from '@authentication/+store/auth.facade';
import { I18nService } from '@core/services/i18n/services/i18n.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private authFacade: AuthFacade, public translate: I18nService) {
        translate.setLanguage('en');
        //translate.setBrowserLang();
    }
    public ngOnInit(): void {
        this.authFacade.AutoLogin();
    }
    title = 'Shoppable';
}
