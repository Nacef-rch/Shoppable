import { NgModule } from '@angular/core';

//Modules

import { SharedModule } from '@shared/shared.module';

//Containers
import { BaseLayoutComponent } from '@admin/Containers/base-layout/base-layout.component';

//Components

import { LayoutModule } from '@layout/layout.module';
import { DashRoutingModule } from './dash-routing.module';
import { ProductModule } from '@product/product.module';
import { HeaderComponent } from './Components/header/header.component';
import { SearchBoxComponent } from './Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Components/header/elements/user-box/user-box.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ItemListComponent } from './Components/header/elements/item-list/item-list.component';

@NgModule({
    declarations: [
        BaseLayoutComponent,
        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,
        SidebarComponent,
        FooterComponent,

        ItemListComponent
    ],
    imports: [LayoutModule, DashRoutingModule, SharedModule],

    exports: [BaseLayoutComponent]
})
export class DashboardModule {}
