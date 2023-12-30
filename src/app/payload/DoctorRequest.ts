import { DoctorQualification } from "../entity/DoctorQualification";
import { Speciality } from "../entity/speciality";

export class DoctorRequest {
    id: number=0;
    userName: string='';
    name: string='';
    dob: any= '';
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
    status: string = 'new';
    isRejected: boolean = false;
    expierenceFrom: any='';
    expierenceTo:any='';
    awards: string[]=[''];
    rates:number=0;
    speciality: Speciality={
        id: 0,
        spName: "",
        spDescription: ""
    };
    qualifications: DoctorQualification[]=[];
    doctorDocumentsFiles: File[]=[];
    documentType: any;
    imageName!:File;
  }
