import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  products: Product[];
  categories: Category[];
  CategoriOfProduct: String[];
  cartLineForm: CartLineForm
  cartId: number
  constructor(private router: Router,private notificationService:NotificationService, private productService: ProductService, private categoryService: CategoryService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    console.log("cart ID : " + this.cartId)
    this.LoadProducts();
    this.loadCategories();
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

  LoadProducts() {
    this.productService.gettrending().subscribe(data => {
      this.products = data
    })
  }

  loadCategories() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data

    })
  }

  productDetail(id: number) {
    this.router.navigate(['product', id])
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
