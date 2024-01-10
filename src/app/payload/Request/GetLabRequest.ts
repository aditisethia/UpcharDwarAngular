import { LabReviewRating } from "src/app/entity/LabReviewRating";
import { Location } from "src/app/entity/Location";

export class GetLabRequest{
    id: number=0;
    labName: any=null;
    email: string='';
    isApproved: boolean=true;
    phone: any=null;
    documentType:any=null;
    location !: Location;
    imageName: any=null;
    biography: any=null;
    isDeleted: boolean=false;
    labReviewRatings: LabReviewRating[]=[];
}