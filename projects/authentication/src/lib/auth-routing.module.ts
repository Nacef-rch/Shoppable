/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './containers/login/login-container.component';
import { RegisterContainerComponent } from './containers/register/register-container.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginContainerComponent
    },
    {
        path: 'register',
        component: RegisterContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
