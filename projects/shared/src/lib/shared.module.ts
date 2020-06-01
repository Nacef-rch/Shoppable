import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [
        LoadingSpinnerComponent,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
