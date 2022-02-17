import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartLine } from 'src/app/models/cart-line';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  isShow = true;
  carts:CartLine[]
   totalQuantity:number
   totalPrice:number
  // items$ = this.cartService.items$;
  // cartPrice$ = this.cartService.cartPrice$;

  constructor(private cartService: CartService,private router:Router) {  
  }
   cartId:number
  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.loadCartLine();
    this.getTotal();
  }

  loadCartLine(){
       this.cartService.viewCart(this.cartId).subscribe(data =>{
        this.totalQuantity = Object.keys(data).length
          this.carts = data;
       })
  }

  toggleBtn() {
    this.isShow = !this.isShow;
  }
  minusItem(productId: number) {
     this.cartService.minusItemQuantity(productId,this.cartId).subscribe(data =>{
       this.loadCartLine();
       this.getTotal();
     })
  }
  plusItem(productId: number) {
    this.cartService.plusItemQuantity(productId,this.cartId).subscribe(data =>{
      this.loadCartLine();
      this.getTotal();
    })
 
  }

  getTotal(){
    this.cartService.getTotal(this.cartId).subscribe(data=>{
      this.totalPrice = data
    })
  }
}
