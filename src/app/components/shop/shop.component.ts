import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../services/http-server.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  products: any;
  constructor(private httpServer: HttpServerService) { }

  ngOnInit(): void {
    this.httpServer.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
