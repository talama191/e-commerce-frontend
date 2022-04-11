import { Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isShowCart = false;
  cartLineForm: CartLineForm
  // items$ = 1
  // cartQuantity$ = 1
  // cartPrice$ = 1
  quantity: number
  cartId: number
  @ViewChild('cartBtn') cartBtn: ElementRef | undefined;
  @ViewChild('cartItems') cartItems: ElementRef | undefined;

  constructor(private renderer: Renderer2, private cartService: CartService, private router: Router) {
    // this.cartService1 = cartService;
    this.cartService.cartComponentInstance=this;
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.cartBtn?.nativeElement && e.target !== this.cartItems?.nativeElement) {
        this.isShowCart = false;
      }
    })
  }
  ngOnInit(): void {
    // this.cartLineForm = new CartLineForm();
    this.cartId = Number(localStorage.getItem("userId") as string)
    if (this.cartId != 0) {
      this.cartService.viewCart(this.cartId).subscribe(data => {
        this.quantity = Object.keys(data).length
      })
    }

  }

  updateCartIcon(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    if (this.cartId != 0) {
      this.cartService.viewCart(this.cartId).subscribe(data => {
        this.quantity = Object.keys(data).length
      })
    }
  }
  viewCart() {
    if (this.cartId == 0) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['cart'])
    }

  }
}
