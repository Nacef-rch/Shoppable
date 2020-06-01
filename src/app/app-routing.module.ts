import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { TestComponent } from '@app/test.component';
import { AuthGuard } from '@authentication/guards/authentication/auth.guard';

const routes: Routes = [
    // {
    //     path: 'auth',
    //     loadChildren: () =>
    //         import('@authentication/authentication.module').then((m) => m.AuthenticationModule)
    // },

    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
