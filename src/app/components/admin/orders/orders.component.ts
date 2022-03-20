import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Order } from 'src/app/models/order';
import { HttpServerService } from 'src/app/services/http-server.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  // orders: Order[]
  constructor() { }

  ngOnInit(): void {
  }

}
