import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartBuildComponent } from './containers/start-build/start-build.component';
import { TypeBuildComponent } from './containers/type-build/type-build.component';
import { NameBuildComponent } from './containers/name-build/name-build.component';
import { TypeToEditComponent } from './containers/type-to-edit/type-to-edit.component';
import { FirstTemplateHomeComponent } from '@layout/Container/first-template-home/first-template-home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
    },
    {
        path: 'new',
        component: StartBuildComponent
    },
    {
        path: 'intro',
        component: TypeBuildComponent
    },
    {
        path: 'name',
        component: NameBuildComponent
    },
    {
        path: 'test',
        component: TypeToEditComponent
    },
    {
        path: 'site',
        component: FirstTemplateHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebuilderRoutingModule {}
