import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { BookingTransportComponent } from './booking-transport/booking-transport.component';
import { DriversAroundComponent } from './drivers-around/drivers-around.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';


@NgModule({
  declarations: [
    BookingTransportComponent,
    DriversAroundComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBjzIDmzHAZKNoI5n8k0CGeEvhptHG5uss",
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ]
})
export class CustomerModule { }
