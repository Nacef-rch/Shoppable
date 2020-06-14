import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () =>
            import('@authentication/authentication.module').then((m) => m.AuthenticationModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('@dash/dashboard.module').then((m) => m.DashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
