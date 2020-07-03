import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsImportComponent } from '@product/Containers/products/products-import.component';
import { ProductInventoryComponent } from '@product/Containers/product-inventory/product-inventory.component';

import { AllProductsComponent } from '@product/Containers/all-products/all-products.component';
import { AuthGuard } from '@authentication/guards/auth.guard';
import { BaseLayoutComponent } from '@admin/Containers/base-layout/base-layout.component';
import { DefaultCheckoutComponent } from './Containers/checkout/default-checkout/default-checkout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivate: [AuthGuard],
                component: AllProductsComponent,
                pathMatch: 'full'
            },

            {
                path: 'new',
                component: ProductsImportComponent
            },
            {
                path: 'inventory',
                component: ProductInventoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
