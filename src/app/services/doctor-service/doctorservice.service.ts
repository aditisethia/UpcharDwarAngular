import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from '../user/helper';
import { DoctorRequest } from 'src/app/payload/Request/DoctorRequest';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private server = 'http://localhost:9097';



  constructor(private _http: HttpClient) { }

  setInvoice(Invoice:any){
    return this._http.post(`${baseUrl}/invoice/create`,Invoice);
  }

  getALLSpeciality() {
    return this._http.get(`${baseUrl}/speciality/all`);
  }

  getTotalPetient() {
    return this._http.get(`${baseUrl}/appointment/countPatient`)
  }

  getTodaysPatient() {
    return this._http.get(`${baseUrl}/appointment/countTodaysPetient`)
  }

  getTotalUpcomingAppointment() {
    return this._http.get(`${baseUrl}/appointment/countUpcomingAppointments`)
  }

  getUpcomingAppointment() {
    return this._http.get(`${baseUrl}/appointment/upcomingAppointments`)
  }


  cancelAppointment(aid: any) {
    return this._http.get(`${baseUrl}/appointment/cancelAppointment/${aid}`, aid)
  }


  getTodaysAppointment() {
    return this._http.get(`${baseUrl}/appointment/todaysAppointments`)
  }

  upload(doctor: DoctorRequest) {
    const headers = new HttpHeaders({
      'enctype': 'multipart/from-data'
    });
    const formData = new FormData();
    if (doctor.doctorDocumentsFiles.length != 0) {
      for (const file of doctor.doctorDocumentsFiles) {
        formData.append("files", file);
      }
    }
    else {

      alert(headers);
      console.log("asdf");

      formData.append("files", 'null');
    }




    formData.append("data", new Blob([JSON.stringify(doctor)], { type: 'application/json' }));


    return this._http.post(`${baseUrl}/doctor/save1`, formData, { headers });

  }




  public getdoctorbyydrId(drId: any) {

    return this._http.get(`${baseUrl}/doctor/${drId}`)

  }





  //for image concatnation
  public IMAGE_URL = 'http://localhost:8080/api/getImageApi/';

  public download(filename: string): Observable<HttpEvent<Blob>> {
    return this._http.get(`${this.server}/file/download/${filename}`,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob'
      });
  }
}

