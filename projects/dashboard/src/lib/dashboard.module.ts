import { NgModule } from '@angular/core';
import { NavBarDashComponent } from './components/nav-bar-dash/nav-bar-dash.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashRoutingModule } from './dash-routing.module';
import { SideBarDashComponent } from './components/side-bar-dash/side-bar-dash.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './components/header/elements/user-box/user-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/sidebar/elements/logo/logo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        NavBarDashComponent,
        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,
        SidebarComponent,
        LogoComponent,

        DashboardComponent,
        SideBarDashComponent
    ],
    imports: [DashRoutingModule, NgbModule, PerfectScrollbarModule],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    exports: [DashboardComponent]
})
export class DashboardModule {}
