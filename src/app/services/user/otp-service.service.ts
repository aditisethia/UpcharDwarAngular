import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {

  constructor(
    private http: HttpClient) {
  }


  // public verify(otp: string, email: string): Observable<any> {

  //   // const params = new HttpParams().set(`email`, email).set(`otp`, otp);
  //   // console.log(params);
  //   const url = `${baseUrl}/auth/verify?email=${email}&otp=${otp}`;
  //   return this.http.get<string>(url);

  // }

  public verify(otprequest:any): Observable<any> {

    return this.http.post(ApiRoutes.VERIFY_OTP,otprequest);
  }
}
