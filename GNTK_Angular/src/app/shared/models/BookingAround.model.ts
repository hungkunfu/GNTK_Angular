export class BookingsAroundReq{
  driverId !: string;
  inRadius !: number;
}

export class BookingsAroundRes{
  bookingId !: string;
  latitude !: number;
  longitude !: number;
  inRadius !: number;
}
