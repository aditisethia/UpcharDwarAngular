import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {



  constructor(private http: HttpClient) {}

  createOrder(amount: number): Observable<any> {
    const data = { amount: amount * 100, currency: 'INR', receipt: 'order_receipt' };
    return this.http.post(`${baseUrl}/timeslote/create-order`, data);
  }

  capturePayment(paymentId: string, orderId: string): Observable<any> {
    const data = { paymentId, orderId };
    return this.http.post(`${baseUrl}/timeslote/capture-payment`, data);
  }
}
