import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DistrictRes, LocationReq, ProvinceRes, WardRes } from '../../models/Location.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient) {}
  getProvince() : Observable<ProvinceRes[]>{
    return this.httpClient.get(`https://localhost:44383/api/Location/GetProvince`)
                          .pipe(map(result => result as ProvinceRes[]))
  }
  getDistrict(request : LocationReq) : Observable<DistrictRes[]>{
    return this.httpClient.post(`https://localhost:44383/api/Location/GetDistrict`, request)
                          .pipe(map(result => result as DistrictRes[]))
  }
  getWard(request : LocationReq) : Observable<WardRes[]>{
    return this.httpClient.post(`https://localhost:44383/api/Location/GetWard`, request)
                          .pipe(map(result => result as WardRes[]))
  }
  
}
