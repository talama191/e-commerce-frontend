import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isShowCart = false;

  items$ = this.cartService.items$;
  cartQuantity$ = this.cartService.cartQuantity$;
  cartPrice$ = this.cartService.cartPrice$;

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
  }
}
