import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../user/helper';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService{

  constructor(private _http:HttpClient) { }

  getInvoicebyDOctorId(doctorId:any){

    return this._http.get(ApiRoutes.GET_INVOICE_BY_DR_ID+`${doctorId}`);

  }
}
