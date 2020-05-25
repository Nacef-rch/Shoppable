import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from '@authentication/components/login/login.component';
import { LoginContainerComponent } from './login-container.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [LoginComponent, LoginContainerComponent],
    imports: [HttpClientModule, CommonModule, FormsModule, LoginRoutingModule, SharedModule],
    exports: [LoginComponent, LoginContainerComponent],
})
export class LoginModule {}
