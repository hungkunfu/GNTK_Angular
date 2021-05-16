import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng-uikit-pro-standard';
@NgModule({
  declarations: [
    LoginComponent,
    DriverRegisterComponent,
    CustomerRegisterComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule.forRoot(),
  ],
})
export class AccountModule {}
