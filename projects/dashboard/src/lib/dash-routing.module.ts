import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { BaseLayoutComponent } from './Containers/base-layout/base-layout.component';
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule {}
