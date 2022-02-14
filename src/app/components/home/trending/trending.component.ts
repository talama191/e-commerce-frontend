import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  products: Product[];
  categories:Category[];
  CategoriOfProduct:String[];
  constructor(private router:Router,private productService:ProductService,private categoryService:CategoryService) { }

  ngOnInit(): void {
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

  LoadProducts(){
    this.productService.getProduct().subscribe(data=>{
      this.products = data
    })
   }

   loadCategories(){
      this.categoryService.findAll().subscribe(data =>{
          this.categories = data
          console.log("data" + data.name)
      })
   }
 
  productDetail(){
    this.router.navigate(['detail'])
  }
}
