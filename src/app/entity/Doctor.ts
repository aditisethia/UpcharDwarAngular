import { DoctorDocument } from "./DoctorDocument";
import { DoctorQualification } from "./DoctorQualification";
import { Speciality } from "./speciality";

export class Doctor {
    id: number=0;
    userName: string='';
    name: string='';
    DOB: any= '';
    gender: string='';
    phone: string='';
    password: string='';
    email: string='';
    biography: string='';
    address: string='';
    city: string='';
    state: string='';
    country: string='';
    postalcode: string='';
    rate: number=0;
    status: string = '';
    isRejected: boolean = false;
    expierenceFrom: number=0;
    expierenceTo:number=0;
    awards: string[]=[];
    rates:number=0;
    specilities:  Speciality[]=[];
    qualifications: DoctorQualification[]=[];
    doctorDocuments: DoctorDocument[]=[];
    documentType: any;
    imageName:string='';
    // name!:File;
  }
;









