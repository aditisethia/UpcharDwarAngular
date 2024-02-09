import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiRoutes } from '../utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class DoctorScheduleService {

  constructor(private http:HttpClient) { }


  getdoctorbyuserid(userid:any){
    return this.http.get(ApiRoutes.GET_DR_BY_USER_ID+`${userid}`);
  }


  generatetimeslotesandschedule(ScheduleRequest:any){
    return this.http.post(ApiRoutes.GENERATE_TIME_SLOTE_SCHEDULE,ScheduleRequest);
  }


  getschedulesbydoctorid(drid:any){
    return this.http.get(ApiRoutes.GET_SCHEDULE_BY_DR_ID+`${drid}`);
  }

  deleteschedulebyid(schid:any){
    return this.http.delete(ApiRoutes.DELETE_SCHEDULE_BY_ID+`${schid}`);
  }
}
