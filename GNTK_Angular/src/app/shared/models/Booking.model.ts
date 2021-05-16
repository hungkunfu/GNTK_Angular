export class BookingInfo{
  bookingId !:string;
  distance !: number;
  unitPrice !: number;
  bookingTime !: Date;
  pickedUpTime !: Date;
  droppedOffTime !: Date;
  customerId !: string;
  driverId !: string;
  commentId !: string;
  discountId !: string;
  pickedUpLatitude !: number;
  pickedUpLongitude !: number;
  dropedOffLatitude !: number;
  dropedOffLongitude !: number;
  isCancel !: boolean;
}
