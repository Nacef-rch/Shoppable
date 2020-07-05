import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () =>
            import('@authentication/authentication.module').then((m) => m.AuthenticationModule)
    },
    {
        path: 'products',
        loadChildren: () => import('@product/product.module').then((m) => m.ProductModule)
    },

    {
        path: 'home',
        loadChildren: () => import('@home/home.module').then((m) => m.HomeModule)
    },
    {
        path: ':store',
        loadChildren: () => import('@store/store.module').then((m) => m.StoreModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
