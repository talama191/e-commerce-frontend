import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
   products:Product[]
   cartId:number
   cartLineForm: CartLineForm
  constructor(private productService:ProductService,
    private router:Router,
    private notificationService:NotificationService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.loadProducts()
  }
  sellerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 4,
    autoplay: true
  }

  loadProducts(){
    this.productService.gettrending().subscribe(data=>{
      this.products = data
    })
  }

  addToCart(productId: number) {
    // this mean user haven't login yet
    if (this.cartId == 0) {
      this.router.navigate(['login'])
    } else {
      this.cartLineForm = new CartLineForm(productId, 1);
      this.cartService.addToCart(this.cartId, this.cartLineForm).subscribe(data => {
        this.cartService.cartComponentInstance.updateCartIcon(); 
        this.notificationService.notificationInstance.showNotification("Added to cart");
      })
    }
  }

}
