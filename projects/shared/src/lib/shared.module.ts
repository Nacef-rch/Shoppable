import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { InternationalizationModule } from '@i18n/internationalization.module';

@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule, CoreModule],
    exports: [
        LoadingSpinnerComponent,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        InternationalizationModule
    ]
})
export class SharedModule {}
