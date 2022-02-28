import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpServerService } from 'src/app/services/http-server.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[];
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private productService:ProductService) { }

  ngOnInit(): void {
   
  }


  getProduct(){
     
  }
}
