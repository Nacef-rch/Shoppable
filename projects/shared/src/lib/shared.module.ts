import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';

import { InternationalizationModule } from '@i18n/internationalization.module';
import { customNotifierOptions } from '@shared/helpers/module-import.helper';
import { DirectivesModule } from './directives/directives.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        DirectivesModule,
        ReactiveFormsModule,
        NotifierModule.withConfig(customNotifierOptions),
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        LoadingSpinnerComponent,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        InternationalizationModule,
        NotifierModule,
        DirectivesModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class SharedModule {}
