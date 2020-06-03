import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {
        //translate.setLanguage('en');
        //translate.setBrowserLang();
    }
    public ngOnInit(): void {
        //this.authFacade.AutoLogin(); na7ihom el comments el kooooooool
    }
}
