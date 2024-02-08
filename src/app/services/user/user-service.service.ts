import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ChangePasswordRequest } from 'src/app/payload/Request/ChangePasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient){
   }

  public addUser(user:any): Observable<any> {

    return this.http.post(`${baseUrl}/auth/generate-otp`,user);
  }

  public changePassword(changePasswordRequest:ChangePasswordRequest){
    return this.http.post(`${baseUrl}/auth/change-password`,changePasswordRequest);
  }

}
