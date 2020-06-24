import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//OTHER MODULES
import { SharedModule } from '@shared/shared.module';

//CONTAINERS
import { DefaultCartComponent } from '@layout/Container/cart/default/default-cart/default-cart.component';
import { DefaultOrderComponent } from '@layout/Container/order-sucess/default/default-order/default-order.component';

//COMPONENTS
import { CardComponent } from '@layout/Components/cards/card/card.component';
import { DefaultHeaderComponent } from '@layout/Components/header/default/default-header.component';
import { DefaultSearchBoxComponent } from '@layout/Components/header/default/elements/default-search-box/default-search-box.component';
import { DefaultFooterComponent } from '@layout/Components/footer/default/default-footer/default-footer.component';
import { DefaultProductInfoComponent } from '@layout/Components/product-info/default/default-product-info/default-product-info.component';
import { DefaultSideBarComponent } from '@layout/Components/side-bar/default-side-bar/default-side-bar.component';
import { InstagramComponent } from '@layout/Components/user-interaction/instagram/instagram.component';

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
