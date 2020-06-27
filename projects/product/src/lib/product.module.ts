import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
    productStoreName,
    productReducer,
    productInitialState
} from '@product/+store/product.reducer';
import { ProductEffects } from '@product/+store/product.effects';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { GetProductsComponent } from './Components/get-products/get-products.component';
import { SharedModule } from '@shared/shared.module';

import { ProductsImportComponent } from './Containers/products/products-import.component';
import { ProductInventoryComponent } from './Containers/product-inventory/product-inventory.component';
import { AllProductsComponent } from './Containers/all-products/all-products.component';
import { DashboardModule } from '@admin/dashboard.module';
import { PageTitleComponent } from './Components/page-title/page-title.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductViewComponent,
        GetProductsComponent,
        ProductsImportComponent,
        PageTitleComponent,
        ProductInventoryComponent,

        AllProductsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardModule,
        SharedModule,
        ProductRoutingModule,

        StoreModule.forFeature(productStoreName, productReducer, {
            initialState: productInitialState
        }),
        EffectsModule.forFeature([ProductEffects])
    ],
    providers: [ProductEffects],
    exports: [
        ProductViewComponent,
        GetProductsComponent,
        ProductsImportComponent,
        SharedModule,

        ProductInventoryComponent,

        AllProductsComponent
    ]
})
export class ProductModule {}
