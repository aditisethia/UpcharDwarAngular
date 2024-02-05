import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';
import { AppointMentRequest } from 'src/app/payload/Request/AppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { AppointmentListRequest } from 'src/app/payload/Request/AppointmentListRequest';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment_Request } from 'src/app/payload/Request/Appointment_Request ';

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

    return this._http.get(`${baseUrl}/appointment/doctor/today/${doctorId}`)
  }
  //appointment for doctor
  getDoctorAppointments(doctorId:any,page: number, size: number): Observable<any> {
    // set up query parameters
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  // make the HTTP request with the dynamic doctorId
  const url = `${baseUrl}/appointment/doctor/${doctorId}`;
  console.log(url);
  console.log(params);


  return this._http.get<any>(url, { params });
}



  getAllAppointments(request: AppointmentListRequest, pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const endpoint = `${baseUrl}/appointments/search/${pageNo}/${pageSize}/${sortBy}`;
    return this._http.post<PageAppointmentRequest>(endpoint, request, { headers });
  }

  addappointment(appointment:any){

    return this._http.post(`${baseUrl}/appointment/book`,appointment);
  }

  getAllAppointmentOfDoctor(pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${baseUrl}/appointment/all/${pageNo}/${pageSize}/${sortBy}`;
    console.log('service')
    return this._http.get<PageAppointmentResponse>(url,{headers});
  }


  private appointmentData = new BehaviorSubject<Appointment_Request | null>(null);
  appointmentData$ = this.appointmentData.asObservable();

  setAppointmentData(data: Appointment_Request) {
    this.appointmentData.next(data);
  }

  getAppointmentsByPatientId(patientId: number, page: number, size: number): Observable<Appointment_Request[]> {
    const url = `${baseUrl}/appointment/patient/${patientId}`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this._http.get<Appointment_Request[]>(url, { params });
  }
}
