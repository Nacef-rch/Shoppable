import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { DefaultComponent } from './Containers/template/default/default.component';

@NgModule({
    declarations: [DefaultComponent],
    imports: [StoreRoutingModule],
    exports: []
})
export class StoreModule {}
