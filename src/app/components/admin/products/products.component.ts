import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpServerService } from 'src/app/services/http-server.service';
import { ProductService } from 'src/app/services/product.service';
import { PageEvent } from '@angular/material/paginator'
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataTable: any
  products: Product[];
  pagingProducts: Product[];
  product:Product;
  totalElements: number = 0;
  pageIndex: number;
  pageSize: number;
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private productService:ProductService) { }

  ngOnInit(): void {
        this.productService.getProduct().subscribe(data =>{
            this.products = data
            this.pagingProducts = this.products.slice(0,10)
        })
  }
  getRequestParam(request:any){
    this.productService.getPagable(request).subscribe(data=>{
      this.products = data.content
      this.totalElements = data['totalElements']
    })
}
  OnPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.pagingProducts = this.products.slice(event.pageIndex*event.pageSize,event.pageIndex*event.pageSize+event.pageSize)
    
  }
  deleteProduct(id: number) {
    this.productService.delete(id).subscribe()
    
    this.productService.getProduct().subscribe(data =>{
      this.products = data
      this.pagingProducts = this.products.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize)
  })
    
  }
  editProduct(id: number) {

  }
}
