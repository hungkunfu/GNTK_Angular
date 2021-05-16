import { Component, OnInit } from '@angular/core';
import { AcceptBookingReq, AcceptBookingRes } from 'src/app/shared/models/AcceptBooking.model';
import { BookingsAroundReq, BookingsAroundRes } from 'src/app/shared/models/BookingAround.model';
import { DriverService } from 'src/app/shared/services/driver-service/driver.service';
import { Router } from '@angular/router';
import { UpdateDriverLocationReq } from 'src/app/shared/models/UpdateDriverLocation.model';

@Component({
  selector: 'app-get-bookings-around',
  templateUrl: './get-bookings-around.component.html',
  styleUrls: ['./get-bookings-around.component.css']
})
export class GetBookingsAroundComponent implements OnInit {

  locationReq !: UpdateDriverLocationReq
  request !: BookingsAroundReq
  bookings : BookingsAroundRes[] = [];
  acceptBookingRes !: AcceptBookingRes
  constructor(private driverService : DriverService,
              private router : Router) { }

  ngOnInit(): void {
    this.request = new BookingsAroundReq
    this.locationReq = new UpdateDriverLocationReq
    this.request.driverId = '5c4c3588-70ab-4b60-8a43-e9c3c8aec359'
    this.request.inRadius = 1;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        this.locationReq.latitude = res.coords.latitude
        this.locationReq.longitude = res.coords.longitude
        this.locationReq.driverId = this.request.driverId
        this.driverService.updateDriverLocation(this.locationReq)
                          .subscribe(_=>{
                            this.getBookingsAround()
                          })
      } );
    }
  }
  getBookingsAround(){
    this.driverService.getBookingsAround(this.request)
                      .subscribe(res=>{
                        console.log(res[0].latitude,res[0].longitude)
                        this.bookings = res
                      })
  }
  acceptBooking(bookingId:string, driverId:string){
    const req = new AcceptBookingReq();
    req.bookingId = bookingId;
    req.driverId = driverId;
    this.driverService.acceptBooking(req)
                      .subscribe(res =>{
                        this.acceptBookingRes = res
                        alert(res.message);
                        this.router.navigateByUrl(`/vi-tri-nhan-khach/${res.bookingId}`)
                      })
  }
}
