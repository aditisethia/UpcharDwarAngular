import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';
import baseUrl from '../user/helper';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

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
    
    return this._http.post(ApiRoutes.ADD_BOOK,booking);
  }


  changeStatus(labTestId: number, labId: number,bookingId:number): Observable<any> {
    return this._http.put<any>(ApiRoutes.CHANGE_LAB_BOOKING_STATUS+`/labBooking/labtests/${labTestId}/changeStatus/${labId}/${bookingId}`, {});
  }


  totalBookingOfLab(labId:number){
    return this._http.get(ApiRoutes.TOTAL_BOOKING_OF_LAB+`${labId}`);
  }

  todaysTotalBookingOfLab(labId:number){
    return this._http.get(ApiRoutes.COUNT_OF_TODAYS_BOOKINGS+`${labId}`);
  }

  serviceProvided(labId:number){
    return this._http.get(ApiRoutes.COUNT_SUCCESSFUL_SERVICE_OF_LAB+`${labId}`);
  }

  totalBookingForPatient(patientId:number){
    return this._http.get(ApiRoutes.GET_ALL_BOOKING_OF_PATIENT+`${patientId}`);
  }
}
