import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { StoreMockModule } from '@shared/mocks/store-mock-module';
import { TranslateMockModule } from './translate-mock-module';

const mockModules = [SharedModule, BrowserAnimationsModule, TranslateMockModule, StoreMockModule];

@NgModule({
    imports: mockModules,
    exports: mockModules
})
export class AppMockModules {}
