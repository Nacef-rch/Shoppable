import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@authentication/guards/auth.guard';
import { ProductsComponent } from '@dash/containers/products/products.component';
import { ProductInventoryComponent } from '@dash/Containers/product-inventory/product-inventory.component';
import { BaseLayoutComponent } from '@dash/Containers/base-layout/base-layout.component';
import { AllProductsComponent } from '@dash/Containers/all-products/all-products.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: AllProductsComponent
            },
            {
                path: 'products/new',
                component: ProductsComponent
            },
            {
                path: 'products/inventory',
                component: ProductInventoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule {}
