import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsImportComponent } from '@product/Containers/products/products-import.component';
import { ProductInventoryComponent } from '@product/Containers/product-inventory/product-inventory.component';

import { AllProductsComponent } from '@product/Containers/all-products/all-products.component';

const routes: Routes = [
    {
        path: '',
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
