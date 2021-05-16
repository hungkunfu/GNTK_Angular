export class UpdateDriverLocationReq{
  driverId !: string;
  latitude !: number;
  longitude !: number;
}

export class UpdateDriverLocationRes{
  driverId !: string;
  message !: string;
}
