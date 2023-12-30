import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

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

  
}
