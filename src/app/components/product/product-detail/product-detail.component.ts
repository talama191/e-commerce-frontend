import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
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
