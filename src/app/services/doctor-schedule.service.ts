import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiRoutes } from '../utils/Api-Routes';
import { Observable } from 'rxjs';
import baseUrl from './user/helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorScheduleService {

  constructor(private http:HttpClient) { }


  update(id:any,patient:any): Observable<any> {
    const headers = new HttpHeaders({
      'enctype': 'multipart/from-data'
    });
    const formData = new FormData();
    if (patient.imageName!= null) {

      formData.append("files", patient.imageName);
      console.log(patient.imageName);

    }
    patient.imageName=''
    formData.append("data", new Blob([JSON.stringify(patient)], { type: 'application/json' }));
   // formData.append("data",JSON.stringify(patient));

    return this.http.put(`${baseUrl}/doctor/update/${id}`, formData,{headers});

  }

  getdoctorbyuserid(userid:any){
    return this.http.get(ApiRoutes.GET_DR_BY_USER_ID+`${userid}`);
  }


  generatetimeslotesandschedule(ScheduleRequest:any){
    return this.http.post(ApiRoutes.GENERATE_TIME_SLOTE_SCHEDULE,ScheduleRequest);
  }


  getschedulesbydoctorid(drid:any){
    return this.http.get(ApiRoutes.GET_UPCOMING_SCHEDULE_BY_DR_ID+`${drid}`);
  }

  deleteschedulebyid(schid:any){
    return this.http.delete(ApiRoutes.DELETE_SCHEDULE_BY_ID+`${schid}`);
  }
}
