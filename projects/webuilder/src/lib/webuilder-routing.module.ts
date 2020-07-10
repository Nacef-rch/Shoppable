import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartBuildComponent } from './containers/start-build/start-build.component';
import { TypeBuildComponent } from './containers/type-build/type-build.component';
import { NameBuildComponent } from './containers/name-build/name-build.component';
import { TypeToEditComponent } from './containers/type-to-edit/type-to-edit.component';
import { FirstTemplateHomeComponent } from '@layout/Container/first-template-home/first-template-home.component';
import { WebuilderSidebarComponent } from './components/webuilder-sidebar/webuilder-sidebar.component';
import { BuilderBaseComponent } from './containers/builder-base/builder-base.component';
import { LogoBuilderComponent } from './components/logo-builder/logo-builder.component';
import { ThemeBuilderComponent } from './components/theme-builder/theme-builder.component';
import { ButtonBuilderComponent } from './components/button-builder/button-builder.component';
import { TextBuilderComponent } from './components/text-builder/text-builder.component';

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
    // {
    //     path: 'config',
    //     component: BuilderBaseComponent,
    //     children: [
    //         {
    //             path: 'name',
    //             component: LogoBuilderComponent,
    //             pathMatch: 'full'
    //         }
    //     ]
    // },
    {
        path: 'config',
        component: BuilderBaseComponent,
        children: [
            {
                path: '',
                component: LogoBuilderComponent,
                pathMatch: 'full'
            },
            {
                path: 'theme',
                component: ThemeBuilderComponent
            },
            {
                path: 'button',
                component: ButtonBuilderComponent
            },
            {
                path: 'text',
                component: TextBuilderComponent
            }
        ]
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
    },
    {
        path: 'test2',
        component: WebuilderSidebarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebuilderRoutingModule {}
