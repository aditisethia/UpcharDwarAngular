import { LabDocuments } from "../../entity/LabDocument";
import { Location } from "../../entity/Location";

export class LabRegistrationRequest{
id: number =0 // Use 'null' for new registration
labName: string='';
email: string='';
password: string='';
isApproved: boolean=false;
phone:any='';
location : Location=new Location();
documentType: any;
imageName!:File;
biography: string='';
labDocuments: File[]=[];
 userId:number=0;
}
