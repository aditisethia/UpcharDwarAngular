import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import baseUrl from '../user/helper';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class TimesloteService {

  constructor(private _http:HttpClient) { }

  gettimeslotesbyuserid(tsid:any){

    return this._http.get(ApiRoutes.GET_TIMESLOT_BU_USER_ID+`${tsid}`);

  }


  public booktimeslote(timesloteid:any,isbooked:any){

    return this._http.put(ApiRoutes.BOOKING_TIME_SLOTS+`${timesloteid}`,isbooked)

  }
}
