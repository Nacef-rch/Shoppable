import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginContainerComponent } from '@authentication/containers/login/login-container.component';
import { RegisterContainerComponent } from '@authentication/containers/register/register-container.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        component: LoginContainerComponent
    },
    {
        path: 'auth/register',
        component: RegisterContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
