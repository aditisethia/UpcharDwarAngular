import { AppointmentListResponse } from "./AppointmentListResponse";

export class PageAppointmentResponse{
contents: any[]=[];
pageNo: number=0;
pageSize: number=0;
totalElements: number=0;
totalPages: number=0;
lastPage: boolean=false;
}