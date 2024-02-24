import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { ResetPasswordRequest } from 'src/app/payload/Request/ResetPassword_Request';
import { ChangePasswordRequest } from 'src/app/payload/Request/ChangePasswordRequest';
import { ApiRoutes } from 'src/app/utils/Api-Routes';
import { UserRequest } from 'src/app/payload/Request/userRequest';

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

  public getpatientbyusergmail(gmail:any)
  {
    return this.http.get(ApiRoutes.GET_PATIENT_BY_EMAIL+`${gmail}`)
  }

   public getuserbtpatientemail(gmail:any)
  {
    return this.http.get(`${baseUrl}/user/users-by-email/${gmail}`)
  }

  getUsersByEmails(emails: string[]): Observable<[]> {
    const params = { emails: emails.join(',') }; // Convert array to comma-separated string
    return this.http.get<[]>(`${baseUrl}/user/users-by-emails`, { params });
  }
}
