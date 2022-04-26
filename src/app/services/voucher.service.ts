import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
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
  getVoucherList():Observable<any>{
    return this.httpClinet.get(`${this.baseUrl}/allVoucher`)
  }
  addVoucher(form: NgForm):Observable<any>{
    const data = {
      "id": 0,
      "code": form.value.code,
      "discountPercent": form.value.discountPercent,
      "expiredAt": "2022-04-26T09:13:21.321Z",
      "createdAt": "2022-04-26T09:13:21.321Z"
    }
    return this.httpClinet.put(`${this.baseUrl}/voucher/add`, data)
  }
  deleteVoucher(id: number): Observable<any>{
    return this.httpClinet.delete(`${this.baseUrl}/delete/{id}?id=${id}`)
  }
}
