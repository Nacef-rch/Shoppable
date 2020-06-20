import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { DefaultComponent } from './Containers/template/default/default.component';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
    declarations: [DefaultComponent],
    imports: [StoreRoutingModule, SharedModule, LayoutModule],
    exports: []
})
export class StoreModule {}
