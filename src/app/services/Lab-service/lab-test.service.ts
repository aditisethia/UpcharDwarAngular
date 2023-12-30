import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateLabTestRequest } from 'src/app/payload/CreateLabTestRequest';
import baseUrl from '../user/helper';
import { Observable } from 'rxjs';
import { PageAppointmentRequest } from 'src/app/payload/PageAppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/pageAppointmentResponse';

@Injectable({
  providedIn: 'root'
})
export class LabTestService {

  constructor( private  _http:HttpClient) { }

  createLabTest(labTest:CreateLabTestRequest){
    return this._http.post(`${baseUrl}/labTest/save`,labTest);
  }


  getLabByUserId(userId: any) {
    console.log(userId+"he")
    const url = `${baseUrl}/lab/user/${userId}`;
    console.log(url);
    
    return this._http.get(url);
  }
  

  
  
}
