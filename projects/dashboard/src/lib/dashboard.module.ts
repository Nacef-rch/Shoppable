import { NgModule } from '@angular/core';

import { DashRoutingModule } from './dash-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { PageTitleComponent } from './Components/page-title/page-title.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchBoxComponent } from './Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Components/header/elements/user-box/user-box.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LogoComponent } from './Components/sidebar/elements/logo/logo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './containers/products/products.component';
import { BaseLayoutComponent } from './Containers/base-layout/base-layout.component';
import { SharedModule } from '@shared/shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        BaseLayoutComponent,
        PageTitleComponent,
        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,
        SidebarComponent,
        LogoComponent,
        FooterComponent,
        ProductsComponent
    ],
    imports: [DashRoutingModule, NgbModule, PerfectScrollbarModule, SharedModule],
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
