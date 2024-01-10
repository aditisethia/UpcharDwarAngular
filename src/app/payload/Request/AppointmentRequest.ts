import { Doctor } from "../../entity/Doctor";

export class AppointMentRequest {
    id: any;
    patientAvatar:any='';
    patientName: string = "";
    appointmentDate: any = "";
    purpose: string = '';
    pid:number=0
    paidAmount: number = 0;
    status: string = '';
    appointmentTime: any = '';
    doctor!: Doctor;
    email = '';
}
