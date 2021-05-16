import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { DirectToCustomerComponent } from './direct-to-customer/direct-to-customer.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { DirectToDestinationComponent } from './direct-to-destination/direct-to-destination.component';


@NgModule({
  declarations: [
    BookingInfoComponent,
    DirectToCustomerComponent,
    DirectToDestinationComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE",
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ]
})
export class BookingModule { }
