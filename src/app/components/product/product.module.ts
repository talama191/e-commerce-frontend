import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RelatedProductComponent } from './related-product/related-product.component';

import { ProductRoutingModule } from './product-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [ProductPageComponent, ProductDetailComponent, RelatedProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule
  ]
})
export class ProductModule { }
