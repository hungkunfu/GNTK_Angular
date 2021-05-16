import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterDriver } from '../../models/RegisterDriver.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterDriverService {

  constructor(private httpClient: HttpClient) { }
  createDriver(request: RegisterDriver): Observable<RegisterDriver> {
    return this.httpClient
      .post('https://localhost:44383/api/Account/CreateDriver', request)
      .pipe(map((result) => result as RegisterDriver));
  }
}
