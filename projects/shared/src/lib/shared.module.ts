import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';

import { InternationalizationModule } from '@i18n/internationalization.module';
import { customNotifierOptions } from '@shared/helpers/module-import.helper';

@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NotifierModule.withConfig(customNotifierOptions)
    ],
    exports: [
        LoadingSpinnerComponent,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        InternationalizationModule
    ]
})
export class SharedModule {}
