import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceptBookingReq } from 'src/app/shared/models/AcceptBooking.model';
import { BookingInfo } from 'src/app/shared/models/Booking.model';
import { CustomerInfo } from 'src/app/shared/models/Customer.model';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';
import { DriverService } from 'src/app/shared/services/driver-service/driver.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

  booking !: BookingInfo
  customer !: CustomerInfo
  constructor(private activatedRoute: ActivatedRoute,
              private bookingService : BookingService,
              private customerService : CustomerService,
              private driverService : DriverService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.customer = new CustomerInfo;
    this.booking = new BookingInfo;
    const bookingId = this.activatedRoute.snapshot.paramMap.get('bookingId');
    if(bookingId !=null)
      this.getBookingById(bookingId);
  }

  getBookingById(bookingId : string){
    this.bookingService.getBookingById(bookingId)
                        .subscribe(result =>{
                          this.booking = result
                          this.getCustomerById(result.customerId);
                        })
  }

  getCustomerById(customerId : string){
    this.customerService.getCustomerById(customerId)
                        .subscribe(result =>{
                          this.customer = result
                        })
  }
  pickedUpCustomer(bookingId: string, driverId : string){
    const req = new AcceptBookingReq;
    req.bookingId = bookingId;
    req.driverId = driverId;
    this.driverService.pickedUpCustomer(req)
                      .subscribe(result => {
                        alert(result.message)
                        this.getBookingById(this.booking.bookingId);
                        if(result.bookingId !='')
                          this.router.navigateByUrl(`vi-tri-tra-khach/${result.bookingId}`)
                      });
  }
  dropedOffCustomer(bookingId: string, driverId : string){
    const req = new AcceptBookingReq;
    req.bookingId = bookingId;
    req.driverId = driverId;
    console.log(req)
    this.driverService.dropedOffCustomer(req)
                      .subscribe(result => {
                        alert(result.message)
                        this.getBookingById(this.booking.bookingId);
                      });
  }
}
