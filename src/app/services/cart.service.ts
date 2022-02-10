import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<Cart[]>([]);
  private cartQuantity = new BehaviorSubject<number>(0);
  private cartPrice = new BehaviorSubject<number>(0);

  items$ = this.itemsSubject.asObservable();
  cartQuantity$ = this.cartQuantity.asObservable();
  cartPrice$ = this.cartPrice.asObservable();

  constructor() {
    let existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!existingCart) {
      existingCart = [];
    }
    this.itemsSubject.next(existingCart);

    this.computeCartTotal();
  }

  addToCart(product: Product) {
    this.items$.pipe(
      take(1),
      map((cart) => {
        for (let item of cart) {
          if (item.product.id === product.id) {
            item.quantity += 1;
            item.totalUnitPrice = product.price * item.quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
          }
        }
        cart.push({ product: product, quantity: 1, totalUnitPrice: product.price });
        localStorage.setItem('cart', JSON.stringify(cart));
      })
    ).subscribe();
    this.computeCartTotal();
  }

  minusCart(id: number) {
    this.items$.subscribe((response) => {
      for (const item of response) {
        if (item.product.id === id) {
          if(item.quantity == 1){
            response.splice(response.indexOf(item), 1);
            localStorage.setItem('cart', JSON.stringify(response));
            return;
          }
          item.quantity -= 1;
          item.totalUnitPrice = item.quantity * item.product.price;
          localStorage.setItem('cart', JSON.stringify(response));
        }
      }
    })
    this.computeCartTotal();
  }
  plusCart(id: number) {
    this.items$.subscribe((response) => {
      for (const item of response) {
        if (item.product.id === id) {
          console.log(item.quantity)
          item.quantity += 1;
          item.totalUnitPrice = item.quantity * item.product.price;
          localStorage.setItem('cart', JSON.stringify(response));
        }
      }
    })
    this.computeCartTotal();
  }

  computeCartTotal() {
    let totalQuantity: number = 0;
    let totalPrice: number = 0;

    this.items$.pipe(
      take(1),
      map((cart) => {
        for (const item of cart) {
          totalQuantity += item.quantity;
          totalPrice += item.totalUnitPrice;
        }
      })
    ).subscribe();
    this.cartQuantity.next(totalQuantity);
    this.cartPrice.next(totalPrice);
  }
}
