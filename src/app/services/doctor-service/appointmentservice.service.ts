import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';
import { AppointMentRequest } from 'src/app/payload/AppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/pageAppointmentResponse';
import { AppointmentListRequest } from 'src/app/payload/AppointmentListRequest';
import { PageAppointmentRequest } from 'src/app/payload/PageAppointmentRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private _http:HttpClient) { }

  getAllAppointments(request: AppointmentListRequest, pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    const endpoint = `${baseUrl}/appointments/search/${pageNo}/${pageSize}/${sortBy}`;
    return this._http.post<PageAppointmentRequest>(endpoint, request, { headers });
  }


  getAllAppointmentOfDoctor(pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${baseUrl}/appointment/all/${pageNo}/${pageSize}/${sortBy}`;
    console.log('service')
    return this._http.get<PageAppointmentResponse>(url,{headers});
  }
    
}
