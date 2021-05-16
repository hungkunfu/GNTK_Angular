import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingInfo } from '../../models/Booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient : HttpClient) { }
  getBookingById(bookingId :string) : Observable<BookingInfo>{
    return this.httpClient.get(`https://localhost:44383/api/Booking/GetBookingById?bookingId=${bookingId}`)
                          .pipe(map(result => result as BookingInfo))
  }
}
