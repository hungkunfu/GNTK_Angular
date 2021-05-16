import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectToCustomerComponent } from './direct-to-customer/direct-to-customer.component';
import { DirectToDestinationComponent } from './direct-to-destination/direct-to-destination.component';

const routes: Routes = [
  {
    path:'vi-tri-nhan-khach/:bookingId',
    component: DirectToCustomerComponent
  },
  {
    path:'vi-tri-tra-khach/:bookingId',
    component:DirectToDestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
