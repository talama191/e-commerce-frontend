import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServerService } from 'src/app/services/http-server.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public id: any;
  public product: any;
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService) { }

  ngOnInit(): void {
    this.httpServer
    .getProductById(this.route.snapshot.paramMap.get('id'))
    .subscribe(data => {
      this.product = data;
    });
  }
}
