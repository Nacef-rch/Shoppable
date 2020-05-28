import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterContainerComponent } from './register-container.component';

const routes: Routes = [{ path: '', component: RegisterContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegisterRoutingModule {}
