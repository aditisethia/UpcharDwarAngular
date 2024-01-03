export class Doctor_Request {
  id!: number;
  userName!: string;
  name!: string;
  DOB!: string; // Assuming you will handle the date format in the front-end
  gender!: string;
  phone!: string;
  password!: string;
  email!: string;
  biography!: string;
  address!: string;
  imageName!: string;
  city!: string;
  state!: string;
  country!: string;
  postalcode!: string;
  rate!: number;
  status!: string;
  isRejected!: boolean;
  expierenceFrom!: string; // Assuming you will handle the date format in the front-end
  expierenceTo!: string; // Assuming you will handle the date format in the front-end
  documentType!: string;
  userid!: number;
  doctorReviewRatings!: DoctorReviewRating[];
  awards!: string[];
  speciality!: Speciality;
  qualifications!: DoctorQualification[];
  doctorDocuments!: DoctorDocument[];
}

interface DoctorReviewRating {
  id: any;
  // Define properties for DoctorReviewRating
}

export class Speciality {
  spName!: string;

  spDescription!: string;
}

interface DoctorQualification {
  // Define properties for DoctorQualification
}

interface DoctorDocument {
  // Define properties for DoctorDocument
}
