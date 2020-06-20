import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './Containers/template/default/default.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full'
    },
    {
        path: 'test',
        component: DefaultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}
