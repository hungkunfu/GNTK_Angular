export class DriverAroundRes{
  driverId !: string;
  fullname !: string;
  latitude !: number;
  longitude !:number;
}

export class DriverAroundReq{
  customerLatitude !: number;
  customerLongitude !: number;
}
