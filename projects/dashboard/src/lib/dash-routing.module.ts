import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@authentication/guards/auth.guard';

import { BaseLayoutComponent } from '@dash/Containers/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'products',
                loadChildren: () => import('@product/product.module').then((m) => m.ProductModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule {}
