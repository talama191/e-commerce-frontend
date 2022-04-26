import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartLine } from 'src/app/models/cart-line';
import { PaymentInfo } from 'src/app/models/payment-info';
import { Voucher } from 'src/app/models/voucher';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { NotificationService } from 'src/app/services/notification.service';
import { VoucherService } from 'src/app/services/voucher.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  isShow = true;
  carts: CartLine[]
  totalQuantity: number
  totalPrice: number
  stripe = Stripe("pk_test_51KVtIKJvWHPiWlgY8CWPvc5APqYOgNXAvBKleIE3LKNh4UoEktd6bU1EjS4CcasThiVNxNduwPbF3Otx0FTTydcv00ZDwtNFxS")

  voucher: Voucher

  checkoutFormGroup: FormGroup;

  paymentInfo: PaymentInfo;

  cardElements: any

  cardError: any

  public nameForm: FormGroup;

  voucherMessage: String

  disablebutton: boolean;

  totalAfterdiscount: number

  discountPercent: number = 0

  // items$ = this.cartService.items$;
  // cartPrice$ = this.cartService.cartPrice$;

  constructor(private cartService: CartService,
    private router: Router,
    private checkoutService: CheckoutService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private voucherService: VoucherService,
    private formBuilder: FormBuilder) {

  }
  cartId: number
  ngOnInit(): void {
    console.log("stripe: " + this.stripe)
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.loadCartLine();
    this.getTotal();
    this.disablebutton = false
    this.nameForm = this.formBuilder.group({
      code: ''
    });

  }

  loadCartLine() {
    this.cartService.viewCart(this.cartId).subscribe(data => {
      this.totalQuantity = Object.keys(data).length
      this.carts = data;
      this.cartService.cartComponentInstance.updateCartIcon();
    })

  }

  toggleBtn() {
    this.isShow = !this.isShow;

  }
  minusItem(productId: number) {
    this.cartService.minusItemQuantity(productId, this.cartId).subscribe(data => {
      this.loadCartLine();
      this.getTotal();
    })
    if (this.voucherMessage != null) {
      this.disablebutton = false
      this.voucherMessage = " re-apply the voucher for discount"
      this.discountPercent = 0
    }
  }
  plusItem(productId: number) {
    this.cartService.plusItemQuantity(productId, this.cartId).subscribe(data => {
      this.loadCartLine();
      this.getTotal();
    })
    if (this.voucherMessage != null) {
      this.disablebutton = false
      this.discountPercent = 0
      this.voucherMessage = " re-apply the voucher for discount"
    }

  }
  clearCart() {
    this.cartService.clearCart(this.cartId).subscribe(data => {
      this.loadCartLine();
      this.getTotal();
      this.notificationService.notificationInstance.showNotification("Cart cleared!!")
    })
    if (this.voucherMessage != null) {
      this.disablebutton = false
      this.discountPercent = 0
      this.voucherMessage = " re-apply the voucher for discount"
    }
  }

  getTotal() {
    this.cartService.getTotal(this.cartId).subscribe(data => {
      this.totalPrice = data
      this.totalAfterdiscount = this.totalPrice;
    })
  }





  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'credit-card',
      currency: 'GBP',
      // amount on cents *10 => to be on dollar
      amount: this.totalAfterdiscount * 100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cart',
      successUrl: 'http://localhost:4200/cart',
    };

    const stripe = await this.stripe;

    // this is a normal http calls for a backend api
    this.http
      .post(`https://ecommerce-hanu-fit.herokuapp.com/checkout/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }


  applyCoupon() {
    let code = this.nameForm.get('code')?.value

    this.voucherService.getVoucerByCode(code).subscribe(data => {

      if (data == null) {
        this.voucherMessage = "Invalid coupon"
      } else {
        this.voucher = data
        this.disablebutton = true
        this.voucherMessage = "you get " + this.voucher.discountPercent + "% discount"
        this.totalAfterdiscount = this.totalPrice - (this.totalPrice * this.voucher.discountPercent) / 100
        this.discountPercent = this.voucher.discountPercent
      }
    })

  }

}
