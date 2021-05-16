import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverAroundReq, DriverAroundRes } from '../../models/DriverAround.model';
import { BookingTransportReq, BookingTransportRes } from '../../models/BookingTransport.model';
import { CustomerInfo } from '../../models/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getDriversAround(request: DriverAroundReq) : Observable<DriverAroundRes[]>{
    return this.httpClient.post('https://localhost:44383/api/Customer/GetDriversAround', request)
                          .pipe(map(result => result as DriverAroundRes[]))
  }
  bookingTransport(request : Partial<BookingTransportReq>) : Observable<BookingTransportRes>{
    return this.httpClient.post('https://localhost:44383/api/Customer/BookingTransport', request)
                          .pipe(map(result => result as BookingTransportRes))
  }
  getCustomerById(customerId :string) : Observable<CustomerInfo>{
    return this.httpClient.get(`https://localhost:44383/api/Customer/GetCustomerById?customerId=${customerId}`)
                          .pipe(map(result => result as CustomerInfo))
  }
}
