import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import { HttpServerService } from 'src/app/services/http-server.service';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[];
  productsTrend: Product[];
  orders: Order[];
  product:Product
  ordersNum:number;
  usersNum:number;
  profit:number=0;
  totalElements: number = 0;
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private productService:ProductService,private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
        this.productService.gettrending().subscribe(data =>{
            this.productsTrend = data
        })
        this.productService.getProduct().subscribe(data =>{
          this.products = data
      })
        this.cartService.getOrders().subscribe(orders => {
          this.ordersNum = orders.length
        })
        this.userService.getAllUsers().subscribe(users => {
          this.usersNum = users.content.length
        })
        this.cartService.getOrders().subscribe(orders => {
          this.orders = orders;
          this.profit = this.orders.filter(order => order.status == 'done').reduce(
            (previousValue, currentValue) => previousValue + currentValue.totalPrice,
            0
          );
        })
  }

  getRequestParam(request:any){
    this.productService.getPagable(request).subscribe(data=>{
      this.products = data.content
      this.totalElements = data['totalElements']
    })
}

}
