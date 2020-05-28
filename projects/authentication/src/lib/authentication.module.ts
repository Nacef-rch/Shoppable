import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [],
    imports: [HttpClientModule, BrowserModule, AuthRoutingModule],
    exports: [],
})
export class AuthenticationModule {}
