import { NgModule } from '@angular/core';
import { HomeComponent } from './Container/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeProductsComponent } from './Container/home-products/home-products.component';
import { LayoutModule } from '@layout/layout.module';
import { HomeStoresComponent } from './Container/home-stores/home-stores.component';
import { HomeSearchComponent } from './Components/home-search/home-search.component';

@NgModule({
    declarations: [HomeComponent, HomeProductsComponent, HomeStoresComponent, HomeSearchComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule,
        HomeRoutingModule,
        LayoutModule
    ],
    exports: []
})
export class HomeModule {}
