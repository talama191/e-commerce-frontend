import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products:Product[]
  category:String
    // page:number =1;
    sortBy:String = "id";
    // direction:String = "asc";
    totalElements: number = 0;
    direction:String = "asc";
    keyword:String;
    cartId: number;
    cartLineForm: CartLineForm;
  constructor(private productService:ProductService,private notificationService: NotificationService,private route:ActivatedRoute,private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.category = this.route.snapshot.params['category'];
    this.productService.findByCategory(this.category).subscribe(data =>{
      this.products = data
    })
  }


  getRequestParam(request:any){
    this.productService.getPagable(request).subscribe(data=>{
      this.products = data.content
      this.totalElements = data['totalElements']
    })
}

sortProduct(request:String){
  this.sortBy = request;
  this.getRequestParam({page: 0, sortBy: this.sortBy});
}

revert(){
  if(this.direction == "asc"){
    this.direction = "desc"
    this.getRequestParam({page: 0, sortBy: this.sortBy, direction: this.direction});
  }
  else if(this.direction == "desc"){
    this.direction = "asc"
    this.getRequestParam({page: 0, sortBy: this.sortBy, direction: this.direction});
  }

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
