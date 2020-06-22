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

@NgModule({
    declarations: [
        CardComponent,
        DefaultHeaderComponent,
        DefaultSearchBoxComponent,
        DefaultFooterComponent,
        DefaultProductInfoComponent,
        DefaultSideBarComponent
    ],
    imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],

    exports: [
        DefaultHeaderComponent,
        DefaultFooterComponent,
        DefaultProductInfoComponent,
        DefaultSideBarComponent
    ]
})
export class LayoutModule {}
