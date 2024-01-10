import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './user/helper';

@Injectable({
  providedIn: 'root'
})
export class TimesloteService {

  constructor(private http: HttpClient) { }

  gettimeslotesbyuserid(tsid:any){

    return this.http.get(`${baseUrl}/timeslote/get/${tsid}`);

  }


}
