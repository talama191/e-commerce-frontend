import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {
  id:number
  relatedProducts:Product[]
  product:Product;
  cartLineForm: CartLineForm
  cartId: number

  constructor(  private route:ActivatedRoute,private notificationService: NotificationService,private productSevice:ProductService,private router:Router,private cartService:CartService) { }
  
  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.id = this.route.snapshot.params['id'];
    this.productSevice.getById(this.id).subscribe(data=>{
      this.product = data
      this.productSevice.findByCategory(this.product.category.name).subscribe(data=>{
        this.relatedProducts = data;
      })
    })

    
    
  }
  trendingOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 4,
    autoplay: true
  }

  addToCart(productId: number) {
    // this mean user haven't login yet
    if (this.cartId == 0) {
      this.router.navigate(['login'])
    } else {
      this.cartLineForm = new CartLineForm(productId, 1);
      this.cartService.addToCart(this.cartId, this.cartLineForm).subscribe(data => {
        this.cartService.cartComponentInstance.updateCartIcon();  this.notificationService.notificationInstance.showNotification("Added to cart");
      })
    }
  }
}
