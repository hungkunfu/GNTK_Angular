import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBookingsAroundComponent } from './get-bookings-around/get-bookings-around.component';
import { GetDriversComponent } from './get-drivers/get-drivers.component';

const routes: Routes = [
  {
    path:'get-drivers',
    component:GetDriversComponent
  },
  {
    path:'chuyen-co-the-nhan',
    component:GetBookingsAroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
