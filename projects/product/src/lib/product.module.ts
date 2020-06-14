import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { productStoreName, productReducer, productInitialState } from './+store/product.reducer';
import { ProductEffects } from './+store/product.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(productStoreName, productReducer, {
            initialState: productInitialState
        }),
        EffectsModule.forFeature([ProductEffects])
    ],
    providers: [ProductEffects],
    exports: []
})
export class ProductModule {}
