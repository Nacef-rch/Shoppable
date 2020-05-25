import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RegisterComponent } from '@authentication/components/register/register.component';
import { RegisterContainerComponent } from './register-container.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
    declarations: [RegisterComponent, RegisterContainerComponent],
    imports: [HttpClientModule, CommonModule, FormsModule, RegisterRoutingModule, SharedModule],
    exports: [RegisterComponent, RegisterContainerComponent],
})
export class RegisterModule {}
