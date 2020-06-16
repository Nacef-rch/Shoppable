import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from '@dash/containers/products/products.component';
import { ProductInventoryComponent } from '@dash/Containers/product-inventory/product-inventory.component';
import { BaseLayoutComponent } from '@dash/Containers/base-layout/base-layout.component';
import { AuthGuard } from '@authentication/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
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
