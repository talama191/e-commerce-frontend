import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products: Product[];
  constructor(private authService:AuthService ,private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {
    var user = localStorage.getItem('currentUser');
  //  const a= this.authService.getRole(authToken);
  this.getCategory();
  this.LoadProducts();
  }

 
   
  getCategory(){
    this.categoryService.findAll().subscribe(data =>{
      console.log(data)
    },
    error =>{
       console.log("redirect to something")
    }
    )
  }

  LoadProducts(){
   this.productService.getProduct().subscribe(data=>{
     this.products = data
     console.log(data)
   })
  }


  check(){
    if(this.authService.isLoggedIn()){
      return true;
    }
    return false;
  }


}
