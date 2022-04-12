import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartLineForm } from 'src/app/models/cart-line-form';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { HttpServerService } from '../../services/http-server.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  products: Product[];
  product:Product
  // page:number =1;
  sortBy:String = "id";
  // direction:String = "asc";
  totalElements: number = 0;
  direction:String = "asc";
  keyword:String;
  cartLineForm:CartLineForm
  cartId:number
   
  shortLink: string = "";
    loading: boolean = false; // Flag variable
    img1: File ; // Variable to store file
    img2: File ;


  public uploadForm: FormGroup;  

  constructor(private httpServer: HttpServerService,
              private productService:ProductService,
              private notificationService: NotificationService,
              private route:ActivatedRoute,
              private cartService:CartService,
              private router:Router,
              private formBuilder: FormBuilder,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.params['keyword'];
        // this.getRequestParam({page: 0, sortBy: this.sortBy});
        this.cartId = Number(localStorage.getItem("userId") as string)
        this.productService.search(this.keyword).subscribe(data =>{
          if(data ==""){
            this.getRequestParam({page: 0, sortBy: this.sortBy});
          }else{
            this.products = data
          }
        })


        this.uploadForm = this.formBuilder.group({
          content: ['']
        });
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


  addToCart(productId:number){
    // this mean user haven't login yet
       if(this.cartId == 0){
            this.router.navigate(['login'])
       }else{
        this.cartLineForm = new CartLineForm(productId,1);
        this.cartService.addToCart(this.cartId,this.cartLineForm).subscribe(data =>{
          this.cartService.cartComponentInstance.updateCartIcon();  this.notificationService.notificationInstance.showNotification("Added to cart");
        })
       }
  }


  onChange(event:any) {
    this.img1 = event.target.files[0];
}
onChange2(event:any) {
  this.img2 = event.target.files[0];
}

// OnClick of button Upload
onUpload() {

    this.loading = !this.loading;
    console.log(this.img1);
    console.log(this.img2);
    this.productService.uploadImage(this.img1).subscribe(data =>{
    }, error =>{
      console.log("path:" + error.error.text)
      this.product.name = "name"
      this.product.img1 = error.error.text
    }
      
    )


    
}
}                                                            
//                                                                          ??
//                                                                         ??
//                  ????                                            ??    ??
//                     ??                                         ??  ??
//                   ??                                         ??      ??

// ???     ???      ????       ??       ????????   ???    ???       ???        ?????      ??????
// ???     ???   ???    ???    ??       ??         ???    ???     ??   ??      ???  ??  ??   ???
// ???     ???   ???    ???    ??       ??         ???    ???   ??       ??    ???    ??     ???
// ???????????   ???    ???    ??       ??         ??????????   ???????????    ???           ???
// ???     ???   ???    ???    ??       ??         ???    ???   ??       ??    ???           ???
// ???     ???      ????       ??       ????????   ???    ???   ??       ??    ???           ???