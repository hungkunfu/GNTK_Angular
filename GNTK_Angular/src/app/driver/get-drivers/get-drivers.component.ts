import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/shared/models/Driver.model';
import { DriverService } from 'src/app/shared/services/driver-service/driver.service';

@Component({
  selector: 'app-get-drivers',
  templateUrl: './get-drivers.component.html',
  styleUrls: ['./get-drivers.component.css']
})
export class GetDriversComponent implements OnInit {

  drivers !: Driver[];

  constructor(private driverService : DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(result =>{
      console.log(result)
      this.drivers = result
    })
  }

}
