import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './Components/cards/card/card.component';
import { DefaultHeaderComponent } from './Components/header/default/default-header.component';
import { DefaultSearchBoxComponent } from './Components/header/default/elements/default-search-box/default-search-box.component';

@NgModule({
    declarations: [CardComponent, DefaultHeaderComponent, DefaultSearchBoxComponent],
    imports: [CommonModule, HttpClientModule, SharedModule],

    exports: [CardComponent, DefaultHeaderComponent]
})
export class LayoutModule {}
