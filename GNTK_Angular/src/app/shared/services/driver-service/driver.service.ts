import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driver } from '../../models/Driver.model';
import { BookingsAroundReq, BookingsAroundRes } from '../../models/BookingAround.model';
import { AcceptBookingReq, AcceptBookingRes } from '../../models/AcceptBooking.model';
import { UpdateDriverLocationReq, UpdateDriverLocationRes } from '../../models/UpdateDriverLocation.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }

  getDrivers() : Observable<Driver[]>{
    return this.httpClient.get('https://localhost:44383/api/Driver/GetDrivers')
                          .pipe(map(result => result as Driver[]))
  }

  getBookingsAround(request : BookingsAroundReq) : Observable<BookingsAroundRes[]>{
    return this.httpClient.post('https://localhost:44383/api/Driver/GetBookingsAround', request)
                          .pipe(map(result => result as BookingsAroundRes[]))
  }

  acceptBooking(request : AcceptBookingReq) : Observable<AcceptBookingRes>{
    return this.httpClient.put('https://localhost:44383/api/Driver/AcceptBooking', request)
                          .pipe(map(result => result as AcceptBookingRes))
  }
  updateDriverLocation(request : UpdateDriverLocationReq) : Observable<UpdateDriverLocationRes>{
    return this.httpClient.put('https://localhost:44383/api/Driver/UpdateDriverLocation',request)
                          .pipe(map(result => result as UpdateDriverLocationRes))
  }
  pickedUpCustomer(request : AcceptBookingReq) : Observable<AcceptBookingRes>{
    return this.httpClient.put('https://localhost:44383/api/Driver/PickedUpCustomer', request)
                          .pipe(map(result => result as AcceptBookingRes))
  }
  dropedOffCustomer(request : AcceptBookingReq) : Observable<AcceptBookingRes>{
    return this.httpClient.put('https://localhost:44383/api/Driver/DropedOffCustomer', request)
                          .pipe(map(result => result as AcceptBookingRes))
  }
  getDriverById(driverId : string) : Observable<Driver>{
    return this.httpClient.get(`https://localhost:44383/api/Driver/GetDriverById?driverId=${driverId}`)
                          .pipe(map(result => result as Driver))
  }
}
