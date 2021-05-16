export class BookingTransportReq{
  distance !: number;
  unitPrice !: number;
  customerId !: string;
  discountId !: string;
  pickedUpLatitude !: number;
  pickedUpLongitude !: number;
  dropedOffLatitude !: number;
  dropedOffLongitude !: number;
  originAddress !: string;
  destinationAddress !: string
}

export interface BookingTransportRes{
  bookingId : string;
  message : string;
  distance : number;
  unitPrice : number;
}

