

import { Location } from "src/app/entity/Location";

export class GetLabRequest{
    id: number=0;
    labName: string='';
    email: string='';
    isApproved: boolean=true;
    phone: any=null;
    documentType:any=null;
    location !: Location;
    imageName: any=null;
    biography: any=null;
    isDeleted: boolean=false;
    rating:number=0;
    labReviewRatings: any[]=[];
}
