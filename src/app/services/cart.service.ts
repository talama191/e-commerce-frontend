import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Cart } from '../models/cart';
import { CartLineForm } from '../models/cart-line-form';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/cart';
  constructor(private httpClient:HttpClient) {
    
  }
   

  viewCart(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/viewCart?id=${id}`)
  }

  addToCart(cartId:number, form:CartLineForm):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/add/${cartId}`,form)
  }

    
}
