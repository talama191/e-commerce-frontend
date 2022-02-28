import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartLine } from 'src/app/models/cart-line';
import { PaymentInfo } from 'src/app/models/payment-info';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { environment } from 'src/environments/environment';




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
   stripe = Stripe("pk_test_51KVtIKJvWHPiWlgY8CWPvc5APqYOgNXAvBKleIE3LKNh4UoEktd6bU1EjS4CcasThiVNxNduwPbF3Otx0FTTydcv00ZDwtNFxS")
  
   checkoutFormGroup: FormGroup;

   paymentInfo: PaymentInfo;

   cardElements: any

   cardError:any



  // items$ = this.cartService.items$;
  // cartPrice$ = this.cartService.cartPrice$;

  constructor(private cartService: CartService,private router:Router,private checkoutService:CheckoutService,private http: HttpClient) {  

  }
   cartId:number
  ngOnInit(): void {
    console.log("stripe: " + this.stripe)
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





  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'credit-card',
      currency: 'GBP',
      // amount on cents *10 => to be on dollar
      amount: this.totalPrice*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cart',
      successUrl: 'http://localhost:4200/cart',
    };

    const stripe = await this.stripe;

    // this is a normal http calls for a backend api
    this.http
    .post(`http://localhost:8080/checkout/payment`, payment)
    .subscribe((data: any) => {
      // I use stripe to redirect To Checkout page of Stripe platform
      stripe.redirectToCheckout({
        sessionId: data.id,
      });
    });
}
  
}
