import { Component, OnInit } from '@angular/core';
import { BookingTransportReq } from 'src/app/shared/models/BookingTransport.model';
import { Position } from 'src/app/shared/models/Position.model';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-booking-transport',
  templateUrl: './booking-transport.component.html',
  styleUrls: ['./booking-transport.component.css']
})
export class BookingTransportComponent implements OnInit {
  pickedUpPositon !: Position;
  dropedOffPosition !: Position;
  distance !: number
  map!: google.maps.Map;
  mapClickListener!: google.maps.MapsEventListener;
  zoom !: number;
  origin !: any;
  destination !: any;
  request !: BookingTransportReq
  originAddress !: string
  destinationAddress !: string
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.request = new BookingTransportReq
    this.pickedUpPositon = new Position
    this.dropedOffPosition = new Position
    navigator.geolocation.getCurrentPosition(res => {
      this.pickedUpPositon.latitude = res.coords.latitude;
      this.pickedUpPositon.longitude = res.coords.longitude;
    });
    this.zoom = 18;
    this.distance = 0;
  }
  getDirection() {
    this.origin = { lat: this.pickedUpPositon.latitude, lng: this.pickedUpPositon.longitude },
    this.destination = { lat: this.dropedOffPosition.latitude, lng: this.dropedOffPosition.longitude }
  }
  mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.dropedOffPosition.latitude = e.latLng.lat();
      this.dropedOffPosition.longitude = e.latLng.lng();
      this.getDirection();
      this.getDistance(this.origin, this.destination);
    });
  }
  bookingTransport(){
    this.request.distance = this.distance;
    this.request.unitPrice = 10000;
    this.request.customerId = 'a735546e-3483-48a5-9f30-bbad383c9298';
    this.request.pickedUpLatitude = this.pickedUpPositon.latitude
    this.request.pickedUpLongitude = this.pickedUpPositon.longitude
    this.request.dropedOffLatitude = this.dropedOffPosition.latitude;
    this.request.dropedOffLongitude = this.dropedOffPosition.longitude;
    this.request.originAddress = this.originAddress;
    this.request.destinationAddress = this.destinationAddress;
    this.customerService.bookingTransport(this.request)
                        .subscribe(result =>{
                          alert(result.message)
                          console.log(result.bookingId)
                        })
  }
  public getDistance(origin: string, destination: string) {
    return new google.maps.DistanceMatrixService().getDistanceMatrix({'origins': [origin], 'destinations': [destination], travelMode:google.maps.TravelMode.DRIVING}, (results: any) => {
        this.distance = results.rows[0].elements[0].distance.value/1000;
    });
  }
  geocodeAddress(){
    const originAddress = document.getElementById('originAddress') as HTMLInputElement
    const destinationAddress = document.getElementById('destinationAddress') as HTMLInputElement
    const geocoder = new google.maps.Geocoder
    geocoder.geocode({ address: originAddress.value }, (results, status) =>{
      if(status == 'OK'){
        this.originAddress = results[0].formatted_address
        this.pickedUpPositon.latitude = results[0].geometry.location.lat()
        this.pickedUpPositon.longitude = results[0].geometry.location.lng()
        this.origin = { lat: this.pickedUpPositon.latitude, lng: this.pickedUpPositon.longitude }
        }
      else
        alert('Địa chỉ này không tồn tại')
    })
    geocoder.geocode({ address: destinationAddress.value }, (results, status) =>{
      if(status == 'OK'){
        this.destinationAddress = results[0].formatted_address
        this.dropedOffPosition.latitude = results[0].geometry.location.lat()
        this.dropedOffPosition.longitude = results[0].geometry.location.lng()
        this.destination = { lat: this.dropedOffPosition.latitude, lng: this.dropedOffPosition.longitude }
        }
      else{
        alert('Địa chỉ này không tồn tại')
      }
    })
  }
  showDirection(){
    this.geocodeAddress()
    setTimeout(()=>{
      this.getDistance(this.origin, this.destination);
    }, 500)
  }
}
