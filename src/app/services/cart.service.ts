import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CartComponent } from '../components/layout/navigation/cart/cart.component';
import { Cart } from '../models/cart';
import { CartLineForm } from '../models/cart-line-form';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartComponentInstance: CartComponent;

  private baseUrl = 'https://ecommerce-hanu-fit.herokuapp.com/cart';
  constructor(private httpClient: HttpClient) {

  }


  viewCart(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/viewCart?id=${id}`)
  }
  clearCart(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/clear/${id}`);
  }

  addToCart(cartId: number, form: CartLineForm): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/add/${cartId}`, form)
  }

  plusItemQuantity(productId: number, cartId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/plus?productId=${productId}&cartId=${cartId}`, null)
  }
  minusItemQuantity(productId: number, cartId: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/minus?productId=${productId}&cartId=${cartId}`, null)
  }


  getTotal(cartId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getTotal?cartId=${cartId}`)
  }


}
