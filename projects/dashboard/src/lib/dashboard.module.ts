import { NgModule } from '@angular/core';

import { DashRoutingModule } from './dash-routing.module';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';

import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

import { FooterComponent } from './Layout/Components/footer/footer.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        BaseLayoutComponent,
        PagesLayoutComponent,
        PageTitleComponent,
        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,
        SidebarComponent,
        LogoComponent,
        FooterComponent
    ],
    imports: [DashRoutingModule, CommonModule, NgbModule, PerfectScrollbarModule],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            // DROPZONE_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            // DEFAULT_DROPZONE_CONFIG,
        }
    ],

    exports: []
})
export class DashboardModule {}
