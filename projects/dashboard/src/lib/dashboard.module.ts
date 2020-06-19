import { NgModule } from '@angular/core';

//Modules
import { DashRoutingModule } from '@dash/dash-routing.module';
import { SharedModule } from '@shared/shared.module';

//Containers
import { BaseLayoutComponent } from '@dash/Containers/base-layout/base-layout.component';

//Components

import { HeaderComponent } from '@dash/Components/header/header.component';
import { SearchBoxComponent } from '@dash/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from '@dash/Components/header/elements/user-box/user-box.component';
import { SidebarComponent } from '@dash/Components/sidebar/sidebar.component';
import { FooterComponent } from '@dash/Components/footer/footer.component';

import { ItemListComponent } from './Components/header/elements/item-list/item-list.component';
import { ProductModule } from '@product/product.module';

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
    imports: [DashRoutingModule, SharedModule],

    exports: []
})
export class DashboardModule {}
