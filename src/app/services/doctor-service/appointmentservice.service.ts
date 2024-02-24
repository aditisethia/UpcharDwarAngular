import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';
import { AppointMentRequest } from 'src/app/payload/Request/AppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { AppointmentListRequest } from 'src/app/payload/Request/AppointmentListRequest';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private _http:HttpClient) { }

  //upcoming appointments

  getupcomingappointmentofdoctor(doctorId:any){

    return this._http.get(`${baseUrl}/appointment/doctor/${doctorId}/upcoming-appointments`);
  }

  //todays appointments of doctor
  gettodayappointmentofdoctor(doctorId:any){

    return this._http.get(ApiRoutes.GET_TODAY_APPOINTMENT_OF_DR+`${doctorId}`)
  }
  //appointment for doctor
  getDoctorAppointments(doctorId:any,page: number, size: number): Observable<any> {
    // set up query parameters
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  // make the HTTP request with the dynamic doctorId
  const url = ApiRoutes.GET_DR_APPOINTMENT+`${doctorId}`;
  console.log(url);
  console.log(params);


  return this._http.get<any>(url, { params });
}



  getAllAppointments(request: AppointmentListRequest, pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const endpoint = ApiRoutes.GET_ALL_APPOINTMENT+`${pageNo}/${pageSize}/${sortBy}`;
    return this._http.post<PageAppointmentRequest>(endpoint, request, { headers });
  }

  addappointment(appointment:any){

    return this._http.post(ApiRoutes.ADD_APPOINTMENT,appointment);
  }

  getAllAppointmentOfDoctor(pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = ApiRoutes.GET_ALL_APPOINTMENT_OF_DR+`${pageNo}/${pageSize}/${sortBy}`;
    console.log('service')
    return this._http.get<PageAppointmentResponse>(url,{headers});
  }


  private appointmentData = new BehaviorSubject<Appointment_Request | null>(null);
  appointmentData$ = this.appointmentData.asObservable();

  setAppointmentData(data: Appointment_Request) {
    this.appointmentData.next(data);
  }

  getAppointmentsByPatientId(patientId: any, page: number, size: number): Observable<Appointment_Request[]> {
    const url = ApiRoutes.GET_APPOINTMENT_OF_PATIENT_ID+`${patientId}`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this._http.get<Appointment_Request[]>(url, { params });
  }

  getappointmentbystatusanddrid(doctorId:any){

    return this._http.get(`${baseUrl}/appointment/doctor/status/${doctorId}`);
  }
}
