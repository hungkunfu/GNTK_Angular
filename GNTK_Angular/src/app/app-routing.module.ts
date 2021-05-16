import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path:'',
    loadChildren:() => import('./driver/driver.module').then(m => m.DriverModule)
  },
  {
    path:'',
    loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path:'',
    loadChildren:() => import('./booking/booking.module').then(m => m.BookingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
