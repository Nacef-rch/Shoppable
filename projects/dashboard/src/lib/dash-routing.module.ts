import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';

import { BaseLayoutComponent } from './Containers/base-layout/base-layout.component';
import { AuthGuard } from '@authentication/guards/auth.guard';
import { ProductInventoryComponent } from './Containers/product-inventory/product-inventory.component';

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
