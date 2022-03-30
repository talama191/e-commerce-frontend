import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpServerService } from 'src/app/services/http-server.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  product:Product
  totalElements: number = 0;
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private productService:ProductService) { }

  ngOnInit(): void {
        this.productService.getProduct().subscribe(data =>{
            this.products = data
        })
  }

  getRequestParam(request:any){
    this.productService.getPagable(request).subscribe(data=>{
      this.products = data.content
      this.totalElements = data['totalElements']
    })
}
}
