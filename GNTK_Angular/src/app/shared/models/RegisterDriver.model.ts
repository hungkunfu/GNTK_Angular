export class RegisterDriver {
  email!: string;
  password!: string;
  confirmPassword!: string;
  phoneNumber!: string;
  fullname!: string;
  avatar!: string;
  identityCardNumber!: string;
  drivingLicenseNumber!: string;
  ward!: number;
  district!: number;
  province!: number;
  country!: number;
  address!: string;
  vehicle!: {
    vehicleRegistrationCertificateNumber: string;
    brand: string;
    numberPlate: string;
  };
}
