import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [HttpClientModule, BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [
        LoadingSpinnerComponent,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
