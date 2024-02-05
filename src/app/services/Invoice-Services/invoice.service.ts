import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService{

  constructor(private _http:HttpClient) { }

  getInvoicebyDOctorId(doctorId:any){

    return this._http.get(`${baseUrl}/invoice/get/doctor/${doctorId}`);

  }
}
