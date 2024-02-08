import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';
import baseUrl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class LabAppointmentServiceService {

  constructor(private _http:HttpClient) { }

  private appointmentData = new BehaviorSubject<LabAppointment_Request | null>(null);
  appointmentData$ = this.appointmentData.asObservable();

  setAppointmentData(data: LabAppointment_Request) {
    this.appointmentData.next(data);
  }


  addBooking(booking:any){

    console.log(booking);
    
    return this._http.post(`${baseUrl}/labBooking/`,booking);
  }
}
