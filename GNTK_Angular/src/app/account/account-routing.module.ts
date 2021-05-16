import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dang-nhap',
    component: LoginComponent,
  },
  {
    path: 'dang-ki-tai-xe',
    component: DriverRegisterComponent,
  },
  {
    path: 'dang-ki-khach-hang',
    component: CustomerRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
