export class PatientRequest {
    id: any;
    patientName: any;
    password: any;
    address: any;
    email: any;
    mobile: any;
    age: any;
    city: any;
    country: any;
    zipcode: any;
    state: any;
    bloodGroup: any;
    documentType: any;
    imageName!: string; // Assuming imageName is a string representing the file name
    name!: File;
  }