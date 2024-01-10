import { LabDocuments } from "./LabDocument";
import { LabTest } from "./LabTest";
import { Location } from "./Location";

export class Lab {
  id: number=0;
  labName: any=null;
  email: any=null;
  password: any=null;
  isApproved: boolean = false;
  phone: any=null;
  documentType: any=null;
  imageName: any=null;
  biography: any=null;
  isDeleted: boolean = false;
   
  labDocument: LabDocuments[]=[];
  labTests: LabTest[]=[];
  //labReviewRatings: LabReviewRating[]=[];
userId:number=0;
  location:Location=new Location();
}
