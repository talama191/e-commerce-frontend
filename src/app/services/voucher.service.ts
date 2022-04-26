import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
   private baseUrl = 'https://ecommerce-hanu-fit.herokuapp.com/voucher';
  constructor(private httpClinet:HttpClient) { }

  getVoucerByCode(code:String):Observable<any>{
    return this.httpClinet.get(`${this.baseUrl}/code?code=${code}`)
  }
}
