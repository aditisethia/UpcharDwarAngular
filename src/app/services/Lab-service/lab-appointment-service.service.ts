import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LabAppointment_Request } from 'src/app/payload/Request/LabAppointment_Request';

@Injectable({
  providedIn: 'root'
})
export class LabAppointmentServiceService {

  constructor() { }

  private appointmentData = new BehaviorSubject<LabAppointment_Request | null>(null);
  appointmentData$ = this.appointmentData.asObservable();

  setAppointmentData(data: LabAppointment_Request) {
    this.appointmentData.next(data);
  }
}
