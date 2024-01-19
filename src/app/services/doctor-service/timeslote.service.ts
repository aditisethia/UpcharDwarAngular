import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import baseUrl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class TimesloteService {

  constructor(private _http:HttpClient) { }

  gettimeslotesbyuserid(tsid:any){

    return this._http.get(`${baseUrl}/timeslote/get/${tsid}`);

  }


  public booktimeslote(timesloteid:any,isbooked:any){

    return this._http.put(`${baseUrl}/timeslote/update/isbooked/${timesloteid}`,isbooked)

  }
}
