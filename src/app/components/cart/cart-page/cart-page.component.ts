import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  // items$ = this.cartService.items$;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  // minusItem(id: number) {
  //   this.cartService.minusCart(id);
  // }
  // plusItem(id: number) {
  //   this.cartService.plusCart(id);
  // }
}
