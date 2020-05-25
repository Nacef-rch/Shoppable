import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { AuthGuard } from '@core/guards/authentication/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
