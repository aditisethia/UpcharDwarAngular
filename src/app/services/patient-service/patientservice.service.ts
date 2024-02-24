import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  patientId:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  pid:Observable<any>=this.patientId.asObservable();

  constructor(private _http:HttpClient) { }


  upload(patient:any): Observable<any> {
    const headers = new HttpHeaders({
      'enctype': 'multipart/from-data'
    });
    const formData = new FormData();
    if (patient.imageName!= null) {

      formData.append("files", patient.imageName);
    }
    else {
      formData.append("files", 'null');
    }

    formData.append("data", new Blob([JSON.stringify(patient)], { type: 'application/json' }));

    return this._http.post(ApiRoutes.UPLOAD, formData, { headers });

  }


  getAllAppointmentOfPatient(pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = ApiRoutes.GET_ALL_APPOINTMENT_OF_PATIENT+`${pageNo}/${pageSize}/${sortBy}`;
    console.log('service')
    return this._http.get<PageAppointmentResponse>(url,{headers});
  }

  getpatientbyemail(email:any){
    const url =ApiRoutes.GET_PATIENT_BY_EMAIL+`${email}`

    return this._http.get(url);
  }

}
