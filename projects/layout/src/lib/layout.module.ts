import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './Components/cards/card/card.component';
import { DefaultHeaderComponent } from './Components/header/default/default-header.component';
import { DefaultSearchBoxComponent } from './Components/header/default/elements/default-search-box/default-search-box.component';
import { DefaultFooterComponent } from './Components/footer/default/default-footer/default-footer.component';
import { DefaultProductInfoComponent } from './Components/product-info/default/default-product-info/default-product-info.component';
import { DefaultSideBarComponent } from './Components/side-bar/default-side-bar/default-side-bar.component';
import { RouterModule } from '@angular/router';
import { DefaultCartComponent } from './Container/cart/default/default-cart/default-cart.component';
import { DefaultOrderComponent } from './Container/order-sucess/default/default-order/default-order.component';
import { InstagramComponent } from './Components/user-interaction/instagram/instagram.component';

@NgModule({
    declarations: [
        CardComponent,
        DefaultHeaderComponent,
        DefaultSearchBoxComponent,
        DefaultFooterComponent,
        DefaultProductInfoComponent,
        DefaultSideBarComponent,
        DefaultCartComponent,
        DefaultOrderComponent,
        InstagramComponent
    ],
    imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],

    exports: [
        DefaultHeaderComponent,
        DefaultFooterComponent,
        DefaultProductInfoComponent,
        DefaultSideBarComponent,
        DefaultCartComponent,
        DefaultOrderComponent
    ]
})
export class LayoutModule {}
