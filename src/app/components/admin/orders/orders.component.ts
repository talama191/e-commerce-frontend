import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServerService } from 'src/app/services/http-server.service';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getOrders().subscribe(orders => {
      this.orders = orders
      
    })
  }

}
