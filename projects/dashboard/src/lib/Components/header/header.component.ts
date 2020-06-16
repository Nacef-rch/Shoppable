import { Component, HostBinding } from '@angular/core';

import { ThemeOptions } from '@dash/constants/theme-options';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(public globals: ThemeOptions) {}

    @HostBinding('class.isActive')
    public get isActiveAsGetter(): boolean {
        return this.isActive;
    }

    isActive: boolean;

    public toggleSidebarMobile(): void {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }

    public toggleHeaderMobile(): void {
        this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
    }
}
