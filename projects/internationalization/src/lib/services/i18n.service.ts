import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class I18nService {
    private switchMade: boolean;
    public lang = 'en';
    constructor(private translate: TranslateService) {}

    get currentLang(): string {
        return this.translate.currentLang;
    }

    public setLanguage(lanKey: string): Observable<boolean> {
        this.translate.setDefaultLang(lanKey);
        this.translate.use(lanKey);
        return of(true);
    }

    public setBrowserLang(): Observable<boolean> {
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        return of(true);
    }

    // public switchLanguage(): Observable<boolean> {
    //     const langKey: string = this.currentLang === 'fr' ? 'en' : 'fr';
    //     this.setLanguage(langKey);
    //     return of(true);
    // }
    public switchLanguage(): Observable<boolean> {
        if (this.switchMade) {
            this.setLanguage('en');
            this.lang = 'en';

            this.switchMade = false;
            return of(true);
        }
        this.switchMade = true;
        this.setLanguage('fr');
        this.lang = 'fr';

        return of(true);
    }
}
