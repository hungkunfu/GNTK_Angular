export class LocationReq {
  provinceId!: number;
  districtId!: number;
}

export class ProvinceRes {
  provinceId!: number;
  provinceName!: string;
}

export class DistrictRes {
  districtId!: number;
  districtName!: string;
}

export class WardRes {
  wardId!: number;
  wardName!: string;
}
