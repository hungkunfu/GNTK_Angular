import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterCustomer } from '../../models/RegisterCustomer.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterCustomerService {
  constructor(private httpClient: HttpClient) {}

  createCustomer(
    request: Partial<RegisterCustomer>
  ): Observable<RegisterCustomer> {
    return this.httpClient
      .post('https://localhost:44383/api/Account/CreateCustomer', request)
      .pipe(map((result) => result as RegisterCustomer));
  }
}
