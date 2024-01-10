import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientRequest } from 'src/app/payload/Request/ParientRequest';
import baseUrl from '../user/helper';
import { BehaviorSubject, Observable } from 'rxjs';
import { PatientResponse } from 'src/app/payload/response/Response/PatientResponse';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  patientId:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  pid:Observable<any>=this.patientId.asObservable();

  constructor(private _http:HttpClient) { }


  upload(patient:PatientRequest): Observable<any> {
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

    return this._http.post(`${baseUrl}/patient/save1`, formData, { headers });

  }


  getAllAppointmentOfPatient(pageNo: number, pageSize: number, sortBy: string): Observable<PageAppointmentRequest> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${baseUrl}/appointment/all/patient/${pageNo}/${pageSize}/${sortBy}`;
    console.log('service')
    return this._http.get<PageAppointmentResponse>(url,{headers});
  }

  getpatientbyemail(email:any){
    const url =`${baseUrl}/patient/by-email/${email}`

    return this._http.get(url);
  }

}
