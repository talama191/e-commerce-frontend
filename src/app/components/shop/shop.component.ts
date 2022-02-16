import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { HttpServerService } from '../../services/http-server.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  products: Product[];
  // page:number =1;
  sortBy:String = "id";
  // direction:String = "asc";
  totalElements: number = 0;
  direction:String = "asc";
  keyword:String;
  cartLineForm:CartLineForm
  public nameForm:FormGroup;
  constructor(private httpServer: HttpServerService,
              private productService:ProductService,
              private route:ActivatedRoute,
              private cartService:CartService,
              private formBuilder: FormBuilder) { 

                this.nameForm = this.formBuilder.group({
                  productId: '',
                  quantity: ''
                });
              }

  ngOnInit(): void {
    this.cartLineForm = new CartLineForm();
    this.keyword = this.route.snapshot.params['keyword'];
        // this.getRequestParam({page: 0, sortBy: this.sortBy});
        this.productService.search(this.keyword).subscribe(data =>{
          console.log("search data : " + data)
          if(data ==""){
            this.getRequestParam({page: 0, sortBy: this.sortBy});
          }else{
            this.products = data
          }
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


  addToCart(){
  
      this.cartService.addToCart(2,this.cartLineForm).subscribe(data=>{
        console.log("item:" + data)
      })
  }


  onSubmit(){
    // this.addToCart()
    const a = this.nameForm.get('productId')?.value
    console.log(a)
    alert("added item to cart")
  }
}
