import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  isShow = true;

  items$ = this.cartService.items$;
  cartPrice$ = this.cartService.cartPrice$;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.isShow = !this.isShow;
  }
  minusItem(id: number) {
    this.cartService.minusCart(id);
  }
  plusItem(id: number) {
    this.cartService.plusCart(id);
  }
}
