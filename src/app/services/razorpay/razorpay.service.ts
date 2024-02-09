import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../user/helper';
import { ApiRoutes } from 'src/app/utils/Api-Routes';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {



  constructor(private http: HttpClient) {}

  createOrder(amount: number): Observable<any> {
    const data = { amount: amount * 100, currency: 'INR', receipt: 'order_receipt' };
    return this.http.post(ApiRoutes.CREATE_ORDER, data);
  }

  capturePayment(paymentId: string, orderId: string): Observable<any> {
    const data = { paymentId, orderId };
    return this.http.post(ApiRoutes.CAPTATURE_PAYMENT, data);
  }
}
