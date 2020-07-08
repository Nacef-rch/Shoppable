import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@home/Container/home/home.component';
import { HomeProductsComponent } from './Container/home-products/home-products.component';
import { HomeStoresComponent } from './Container/home-stores/home-stores.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'stores',
                pathMatch: 'full'
            },
            {
                path: 'stores',
                component: HomeStoresComponent
            },
            {
                path: 'products',
                component: HomeProductsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
