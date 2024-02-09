import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateLabTestRequest } from 'src/app/payload/Request/CreateLabTestRequest';
import baseUrl from '../user/helper';
import { Observable } from 'rxjs';
import { PageAppointmentRequest } from 'src/app/payload/Request/PageAppointmentRequest';
import { PageAppointmentResponse } from 'src/app/payload/response/Response/pageAppointmentResponse';
import { UpdateLabTestRequest } from 'src/app/payload/Request/UpdateLabTestRequest';
import { UpdateLabTestResponse } from 'src/app/payload/response/Response/UpdateLabTestResponse';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class LabTestService {

  constructor( private  _http:HttpClient) { }


  public createTransaction(amount:any){
     return this._http.get(ApiRoutes.CREATE_TRANSACTION+amount);
  }



  //creating labTest
  createLabTest(labTest:CreateLabTestRequest){
    return this._http.post(ApiRoutes.CREATE_LAB_TEST,labTest);
  }


  //getting lab from userId
  getLabByUserId(userId: any) {
    console.log(userId+"he")
    const url = ApiRoutes.GET_LAB_BY_USER_ID+`${userId}`;
    console.log(url);

    return this._http.get(url);
  }


  //deleting labTest by labTestId
  deleteLabTest(labTestId: any){
    const url=ApiRoutes.DELETE_LAB_TEST+`${labTestId}`;
    return this._http.delete(url);
  }


  //updating labtest
  updateLabTest(labTestId :any ,labTest:UpdateLabTestRequest){
     const url=ApiRoutes.UPDATE_LAB+`${labTestId}`;
     return this._http.put(url,labTest);
  }


  //get LabTest by id
  getLabTestById(labTestId:any){


    const url=ApiRoutes.GET_LAB_TEST_BY_ID+`${labTestId}`;
    return this._http.get(url);
  }

}
