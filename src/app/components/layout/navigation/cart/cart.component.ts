import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isShowCart = false;
  cartLineForm:CartLineForm
  // items$ = 1
  // cartQuantity$ = 1
  // cartPrice$ = 1
  quantity:number

  @ViewChild('cartBtn') cartBtn: ElementRef | undefined;
  @ViewChild('cartItems') cartItems: ElementRef | undefined;

  constructor(private renderer: Renderer2, private cartService: CartService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.cartBtn?.nativeElement && e.target !== this.cartItems?.nativeElement) {
        this.isShowCart = false;
      }
    })
  }
  ngOnInit(): void {
    this.cartLineForm = new CartLineForm();
    this.cartService.viewCart(2).subscribe(data =>{
        this.quantity = Object.keys(data).length
    })
  }

  addToCart(cartId:number){
    // this.cartService.addToCart(cartId)
  }
}
