import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/shared/models/Position.model';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct-to-customer',
  templateUrl: './direct-to-customer.component.html',
  styleUrls: ['./direct-to-customer.component.css']
})
export class DirectToCustomerComponent implements OnInit {
  bookingId !: string
  position !: Position
  origin !: any
  destination !: any
  zoom !: number
  constructor(private bookingService: BookingService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.position = new Position;
    this.getLocation();
    this.bookingId = `${this.activatedRoute.snapshot.paramMap.get('bookingId')}`;
    this.getBookingById(this.bookingId);
  }
  getBookingById(bookingId : string){
    return this.bookingService.getBookingById(bookingId)
                              .subscribe(result =>{
                                this.origin = { lat: this.position.latitude, lng: this.position.longitude },
                                this.destination = { lat: result.pickedUpLatitude, lng: result.pickedUpLongitude }
                              })
  }
  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        this.position.latitude = res.coords.latitude;
        this.position.longitude = res.coords.longitude;
        this.zoom = 18
      } );
    }
  }
}
