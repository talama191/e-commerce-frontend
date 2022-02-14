import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Input() product: any;
  id:number;
  pro:Product;
  constructor(private cartService: CartService
             ,private activatedRoute: ActivatedRoute
            ,private productService:ProductService
            ,private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id'];
    this.productService.getById(this.id).subscribe(data=>{
      this.pro = data;
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
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

}
