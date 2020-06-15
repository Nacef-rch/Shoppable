import { NgModule } from '@angular/core';

import { DashRoutingModule } from './dash-routing.module';

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
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductInventoryComponent } from './Containers/product-inventory/product-inventory.component';
import { GetProductsComponent } from './Components/get-products/get-products.component';

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
        ProductsComponent,
        ProductViewComponent,
        ProductInventoryComponent,
        GetProductsComponent
    ],
    imports: [DashRoutingModule, SharedModule],

    exports: []
})
export class DashboardModule {}
