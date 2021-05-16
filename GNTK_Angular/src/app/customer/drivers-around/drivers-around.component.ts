import { Component, OnInit } from '@angular/core';
import { DriverAroundReq, DriverAroundRes } from 'src/app/shared/models/DriverAround.model';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-drivers-around',
  templateUrl: './drivers-around.component.html',
  styleUrls: ['./drivers-around.component.css']
})
export class DriversAroundComponent implements OnInit {
  currentPosition : DriverAroundReq = new DriverAroundReq();
  zoom !: number
  drivers !: Array<DriverAroundRes>;
  icon: any = {
    url: '../assets/images/driver.svg',
    scaledSize: {
        width: 50,
        height: 60
    }
  }
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(res => {
      this.currentPosition.customerLatitude = res.coords.latitude;
      this.currentPosition.customerLongitude = res.coords.longitude;
    });
    this.zoom = 18;
    console.log(this.currentPosition)
    setTimeout(() => {  this.getDriversAround(); }, 2000);
  }

  getDriversAround(){
    this.customerService.getDriversAround(this.currentPosition)
                        .subscribe(result => {
                          this.drivers = result
                        });
  }
}
