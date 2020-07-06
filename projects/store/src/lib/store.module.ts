import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { StoreModule } from '@ngrx/store';

import { StoreRoutingModule } from '@store/store-routing.module';
import { DefaultComponent } from '@store/Containers/template/default/default.component';

import { StoreStoreName, StoreReducer, StoreInitialState } from '@store/+store/store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './+store/store.effects';

@NgModule({
    declarations: [DefaultComponent],
    imports: [
        StoreRoutingModule,
        SharedModule,
        LayoutModule,
        StoreModule.forFeature(StoreStoreName, StoreReducer, {
            initialState: StoreInitialState
        }),
        EffectsModule.forFeature([StoreEffects])
    ],
    exports: []
})
export class StoresModule {}
