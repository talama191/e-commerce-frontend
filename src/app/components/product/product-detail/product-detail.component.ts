import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isShowDesc = true;
  isShowInfo = false;
  isShowRate = false;
  cartLineForm:CartLineForm
  cartId:number
  @Input() product: any;
  id:number;
  pro:Product;
  constructor(private cartService: CartService
             ,private activatedRoute: ActivatedRoute
            ,private productService:ProductService
            ,private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.cartId = Number(localStorage.getItem("userId") as string)
    this.id = this.route.snapshot.params['id'];
    console.log( "id " + this.id)
    this.productService.getById(this.id).subscribe(data=>{
      this.pro = data;
    })
  }

  openDesc() {
    this.isShowDesc = true;
    this.isShowInfo = false;
    this.isShowRate = false;
  }

  openInfo() {
    this.isShowDesc = false;
    this.isShowInfo = true;
    this.isShowRate = false;
  }

  openRate() {
    this.isShowDesc = false;
    this.isShowInfo = false;
    this.isShowRate = true;
  }


  addToCart(productId:number){
    // this mean user haven't login yet
       if(this.cartId == 0){
            this.router.navigate(['login'])
       }else{
        this.cartLineForm = new CartLineForm(productId,1);
        this.cartService.addToCart(this.cartId,this.cartLineForm).subscribe(data =>{
          console.log(data)
          alert("added to cart")
        })
       }
  }

}
