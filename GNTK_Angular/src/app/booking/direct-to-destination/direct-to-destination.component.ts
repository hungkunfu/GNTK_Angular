import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from 'src/app/shared/models/Position.model';

@Component({
  selector: 'app-direct-to-destination',
  templateUrl: './direct-to-destination.component.html',
  styleUrls: ['./direct-to-destination.component.css']
})
export class DirectToDestinationComponent implements OnInit {

  position !: Position
  bookingId !: string
  origin !: any
  destination !: any
  zoom !: number
  constructor(private bookingService : BookingService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.position = new Position
    this.bookingId = `${this.activatedRoute.snapshot.paramMap.get('bookingId')}`;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        this.position.latitude = res.coords.latitude;
        this.position.longitude = res.coords.longitude;
        this.zoom = 18
      } );
    }
    this.getBookingById(this.bookingId);
  }
  getBookingById(bookingId : string){
    return this.bookingService.getBookingById(bookingId)
                              .subscribe(result =>{
                                this.origin = { lat: this.position.latitude, lng: this.position.longitude },
                                this.destination = { lat: result.dropedOffLatitude, lng: result.dropedOffLongitude }
                              })
  }

}
