export class LabRegistrationResponse{
    id: number =0 
labName: string='';
email: string='';
password: string='';
isApproved: boolean=false;
phone: any='';
location !: Location
documentType: any;
imageName!:File;
biography: string='';
labDocuments: File[]=[];
userId:number=0;
}