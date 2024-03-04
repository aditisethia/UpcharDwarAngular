import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from '../user/helper';
import { DoctorRequest } from 'src/app/payload/Request/DoctorRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private server = 'http://localhost:9097';



  constructor(private _http: HttpClient) { }

  setInvoice(Invoice:any){
    return this._http.post(ApiRoutes.CREATE_INVOICE,Invoice);
  }

  getALLSpeciality() {
    return this._http.get(ApiRoutes.GET_ALL_SPECIALITY);
  }

  getTotalPetient() {
    return this._http.get(ApiRoutes.GET_ALL_PATIENT);
  }

  getTodaysPatient() {
    return this._http.get(ApiRoutes.GET_TODAY_TOTAL_PATIENT);
  }

  getTotalUpcomingAppointment() {
    return this._http.get(ApiRoutes.GET_TOTAL_UPCOMING_APPOINTMENT);
  }

  getUpcomingAppointment() {
    return this._http.get(ApiRoutes.GET_UPCOMING_APPOINTMENT);
    }


  cancelAppointment(aid: any) {
    return this._http.get(ApiRoutes.CANCLE_APPOINTMENT+`${aid}`, aid)
  }


  getTodaysAppointment() {
    return this._http.get(ApiRoutes.GET_TODAY_APPOINTMENT);
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


  public getallcity(){

    return this._http.get(`http://localhost:8080/upchardwar/doctor/cities`);
  }



  public getdoctorbyydrId(drId: any) {

    return this._http.get(ApiRoutes.GET_DR_BY_DR_ID+`${drId}`)

  }





  //for image concatnation
  public IMAGE_URL = 'http://localhost:8080/api/getImageApi/';

  public download(filename: string): Observable<HttpEvent<Blob>> {
    return this._http.get(ApiRoutes.DOWNLOAD+`${filename}`,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob'
      });
  }
}

