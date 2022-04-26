import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentInfo } from '../models/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
   private baseUrl = "https://ecommerce-hanu-fit.herokuapp.com/checkout"
   private publicKey = "pk_test_51KVtIKJvWHPiWlgY8CWPvc5APqYOgNXAvBKleIE3LKNh4UoEktd6bU1EjS4CcasThiVNxNduwPbF3Otx0FTTydcv00ZDwtNFxS"
  constructor(private httpClient:HttpClient) { }
  
  createPaymenyIntent(paymentInfo:PaymentInfo):Observable<any>{
     return this.httpClient.post<PaymentInfo>(`${this.baseUrl}/payment`,paymentInfo)
  }

}
