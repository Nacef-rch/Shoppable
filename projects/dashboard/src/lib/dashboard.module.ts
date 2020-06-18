import { NgModule } from '@angular/core';

//Modules
import { DashRoutingModule } from '@dash/dash-routing.module';
import { SharedModule } from '@shared/shared.module';

//Containers
import { BaseLayoutComponent } from '@dash/Containers/base-layout/base-layout.component';
import { ProductsComponent } from '@dash/containers/products/products.component';

//Components
import { PageTitleComponent } from '@dash/Components/page-title/page-title.component';
import { HeaderComponent } from '@dash/Components/header/header.component';
import { SearchBoxComponent } from '@dash/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from '@dash/Components/header/elements/user-box/user-box.component';
import { SidebarComponent } from '@dash/Components/sidebar/sidebar.component';
import { FooterComponent } from '@dash/Components/footer/footer.component';
import { ProductViewComponent } from '@dash/components/product-view/product-view.component';
import { ProductInventoryComponent } from '@dash/Containers/product-inventory/product-inventory.component';
import { GetProductsComponent } from '@dash/Components/get-products/get-products.component';
import { AllProductsComponent } from '@dash/Containers/all-products/all-products.component';
import { ItemListComponent } from './Components/header/elements/item-list/item-list.component';

@NgModule({
    declarations: [
        BaseLayoutComponent,
        PageTitleComponent,
        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,
        SidebarComponent,
        FooterComponent,
        ProductsComponent,
        ProductViewComponent,
        ProductInventoryComponent,
        GetProductsComponent,
        AllProductsComponent,
        ItemListComponent
    ],
    imports: [DashRoutingModule, SharedModule],

    exports: []
})
export class DashboardModule {}
