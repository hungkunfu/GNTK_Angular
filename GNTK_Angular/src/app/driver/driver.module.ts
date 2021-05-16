import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { GetDriversComponent } from './get-drivers/get-drivers.component';
import { AgmCoreModule } from '@agm/core';
import { GetBookingsAroundComponent } from './get-bookings-around/get-bookings-around.component';


@NgModule({
  declarations: [
    GetDriversComponent,
    GetBookingsAroundComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE"
    })
  ]
})
export class DriverModule { }
