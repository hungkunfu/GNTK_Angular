import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DistrictRes,
  LocationReq,
  ProvinceRes,
  WardRes,
} from 'src/app/shared/models/Location.model';
import { RegisterDriver } from 'src/app/shared/models/RegisterDriver.model';
import { CommonService } from 'src/app/shared/services/common-service/common.service';
import { RegisterDriverService } from 'src/app/shared/services/register-service/register-driver.service';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css'],
})
export class DriverRegisterComponent implements OnInit {
  UserForm!: FormGroup;
  data = false;
  massage!: string;
  districtReq!: LocationReq;
  wardReq!: LocationReq;
  provinceRes: ProvinceRes[] = [];
  districtRes: DistrictRes[] = [];
  wardRes: WardRes[] = [];
  constructor(
    private commonService: CommonService,
    private formbulider: FormBuilder,
    private registerDriverService: RegisterDriverService
  ) {}

  ngOnInit() {
    this.districtReq = new LocationReq();
    this.wardReq = new LocationReq();
    this.getProvince();
    this.UserForm = this.formbulider.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      identityCardNumber: ['', [Validators.required]],
      drivingLicenseNumber: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      district: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country: 237,
      address: ['', [Validators.required]],
      color: ['', [Validators.required]],
      vehicleRegistrationCertificateNumber: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      numberPlate: ['', [Validators.required]],
    });
  }
  onFormSubmit() {
    if (this.UserForm.invalid) {
      alert('Thông tin không hợp lệ');
      return;
    }
    const user = this.UserForm.value;
    this.registerDriverService.createDriver(user).subscribe();
    console.log(user);
   
  }
  Createemployee(register: RegisterDriver) {
    this.registerDriverService.createDriver(register).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.UserForm.reset();
    });
  }
  getProvince() {
    return this.commonService.getProvince().subscribe((result) => {
      this.provinceRes = result;
    });
  }
  getDistrict() {
    this.districtReq.provinceId = parseInt(
      (document.getElementById('province') as HTMLInputElement).value
    );
    return this.commonService
      .getDistrict(this.districtReq)
      .subscribe((result) => {
        this.districtRes = result;
      });
  }
  getWard() {
    this.wardReq.provinceId = parseInt(
      (document.getElementById('province') as HTMLInputElement).value
    );
    this.wardReq.districtId = parseInt(
      (document.getElementById('district') as HTMLInputElement).value
    );
    return this.commonService.getWard(this.wardReq).subscribe((result) => {
      this.wardRes = result;
    });
  }
}
