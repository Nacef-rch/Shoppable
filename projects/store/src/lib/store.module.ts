import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';

import { StoreRoutingModule } from '@store/store-routing.module';
import { DefaultComponent } from '@store/Containers/template/default/default.component';

@NgModule({
    declarations: [DefaultComponent],
    imports: [StoreRoutingModule, SharedModule, LayoutModule],
    exports: []
})
export class StoreModule {}
