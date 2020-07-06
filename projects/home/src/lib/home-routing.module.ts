import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@home/Container/home/home.component';
import { HomeProductsComponent } from './Container/home-products/home-products.component';
import { HomeStoresComponent } from './Container/home-stores/home-stores.component';
import { StartBuildComponent } from '@layout/Container/start-build/start-build.component';
import { TypeBuildComponent } from '@layout/Container/type-build/type-build.component';
import { NameBuildComponent } from '@layout/Container/name-build/name-build.component';

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
    },
    {
        path: 'build',
        component: StartBuildComponent
    },
    {
        path: 'type',
        component: TypeBuildComponent
    },
    {
        path: 'name',
        component: NameBuildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
