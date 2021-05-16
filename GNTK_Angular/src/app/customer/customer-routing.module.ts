import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingTransportComponent } from './booking-transport/booking-transport.component';
import { DriversAroundComponent } from './drivers-around/drivers-around.component';

const routes: Routes = [
  {
    path:'tai-xe-xung-quanh',
    component: DriversAroundComponent
  },
  {
    path:'dat-chuyen',
    component: BookingTransportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
