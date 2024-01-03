import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './user/helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorScheduleService {

  constructor(private http:HttpClient) { }


  getdoctorbyuserid(userid:any){

    return this.http.get(`${baseUrl}/doctor/userid/${userid}`);

  }


  generatetimeslotesandschedule(ScheduleRequest:any){

    return this.http.post(`${baseUrl}/schedule/create`,ScheduleRequest);
  }


  getschedulesbydoctorid(drid:any){
    return this.http.get(`${baseUrl}/schedule/doctor/${drid}`);
  }

  deleteschedulebyid(schid:any){
    return this.http.delete(`${baseUrl}/schedule/${schid}`);
  }
}
