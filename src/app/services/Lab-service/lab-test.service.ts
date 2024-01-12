import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateLabTestRequest } from 'src/app/payload/Request/CreateLabTestRequest';
import baseUrl from '../user/helper';
import { Observable } from 'rxjs';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { UpdateLabTestRequest } from 'src/app/payload/Request/UpdateLabTestRequest';
import { UpdateLabTestResponse } from 'src/app/payload/response/Response/UpdateLabTestResponse';

@Injectable({
  providedIn: 'root'
})
export class LabTestService {

  constructor( private  _http:HttpClient) { }


  public createTransaction(amount:any){
     return this._http.get("${baseUrl}/labBooking/createTransaction/"+amount);
  }



  //creating labTest
  createLabTest(labTest:CreateLabTestRequest){
    return this._http.post(`${baseUrl}/labTest/save`,labTest);
  }


  //getting lab from userId
  getLabByUserId(userId: any) {
    console.log(userId+"he")
    const url = `${baseUrl}/lab/user/${userId}`;
    console.log(url);

    return this._http.get(url);
  }


  //deleting labTest by labTestId
  deleteLabTest(labTestId: any){
    const url=`${baseUrl}/labTest/delete/${labTestId}`;
    return this._http.delete(url);
  }


  //updating labtest
  updateLabTest(labTestId :any ,labTest:UpdateLabTestRequest){
    console.log("edit");
     const url=`${baseUrl}/labTest/update/${labTestId}`;
     return this._http.put(url,labTest);
  }


  //get LabTest by id
  getLabTestById(labTestId:any){


    const url=`${baseUrl}/labTest/get/${labTestId}`;
    return this._http.get(url);
  }

}
