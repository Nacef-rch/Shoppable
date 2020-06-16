import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemeOptions } from '@dash/constants/theme-options';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    @HostListener('window:resize', ['$event'])
    public extraParameter: any;
    private newInnerWidth: number;
    private innerWidth: number;
    activeId = 'dashboardsMenu';

    constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute) {}

    public toggleSidebar(): void {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    }

    public sidebarHover(): void {
        this.globals.sidebarHover = !this.globals.sidebarHover;
    }

    public ngOnInit(): void {
        setTimeout(() => {
            this.innerWidth = window.innerWidth;
            if (this.innerWidth < 1200) {
                this.globals.toggleSidebar = true;
            }
        });

        this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
    }

    public onResize(event): void {
        this.newInnerWidth = event.target.innerWidth;

        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        } else {
            this.globals.toggleSidebar = false;
        }
    }
}
