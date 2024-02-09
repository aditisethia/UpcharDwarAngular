import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(
    private http:HttpClient){
   }

   public generateOtp(email:String): Observable<any> {

    return this.http.post(ApiRoutes.FORGET_PASS_GENERATE_OTP,email);
  }


  public verify(resetRequest:any): Observable<any>{
    return this.http.post(ApiRoutes.FORGET_PASS_VERIFY,resetRequest);
  }

  public reset(reset:ResetPasswordRequest):Observable<any>{
    alert(reset.email);
    return this.http.post(ApiRoutes.RESET_PASSWORD,reset);
  }
}
