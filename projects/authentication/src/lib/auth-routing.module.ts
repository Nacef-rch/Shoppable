/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./containers/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => import('./containers/register/register.module').then((m) => m.RegisterModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
