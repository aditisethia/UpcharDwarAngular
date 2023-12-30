import { LabDocuments } from "./LabDocument";
import { LabTest } from "./LabTest";

export class Lab {
  id: number=0;
  labName: string='';
  email: string='';
  password: string='';
  isApproved: boolean = false;
  phone: string='';
  documentType: string='';
  imageName: string='';
  biography: string='';
  isDeleted: boolean = false;

  labDocument: LabDocuments[]=[];
  labTests: LabTest[]=[];
 // labReviewRatings: LabReviewRating[];
userId:number=0;
}
