import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import {
  DistrictRes,
  LocationReq,
  ProvinceRes,
  WardRes,
} from 'src/app/shared/models/Location.model';
import { CommonService } from 'src/app/shared/services/common-service/common.service';
import { RegisterCustomerService } from 'src/app/shared/services/register-service/register-customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
})
export class CustomerRegisterComponent implements OnInit {
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
    private registerCustomerService: RegisterCustomerService,
    private router: Router,
    private toastrService: ToastService
  ) {}

  ngOnInit(): void {
    this.districtReq = new LocationReq();
    this.wardReq = new LocationReq();
    this.getProvince();
    this.UserForm = this.formbulider.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      district: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country: 237,
      address: ['', [Validators.required]],
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
  onFormSubmit() {
    if (this.UserForm.invalid) {
      alert('Thông tin không hợp lệ');
      return;
    }
    const user = this.UserForm.value;
    this.registerCustomerService.createCustomer(user).subscribe();
    // this.router.navigateByUrl('/dang-nhap');
    this.showSuccess();
    console.log(user);
    console.log(this.UserForm);
  }
  showSuccess() {
    this.toastrService.success('Tạo Tài Khoản Thành Công');
  }
}
