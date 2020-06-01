import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginContainerComponent } from '@authentication/containers/login/login-container.component';
import { RegisterContainerComponent } from '@authentication/containers/register/register-container.component';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginContainerComponent
            },
            {
                path: 'register',
                component: RegisterContainerComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
