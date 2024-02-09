import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ChangePasswordRequest } from 'src/app/payload/Request/ChangePasswordRequest';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient){
   }

  public addUser(user:any): Observable<any> {

    return this.http.post(ApiRoutes.GENERATE_OTP,user);
  }

  public changePassword(changePasswordRequest:ChangePasswordRequest){
    return this.http.post(ApiRoutes.CHANGE_PASSWORD,changePasswordRequest);
  }

}
