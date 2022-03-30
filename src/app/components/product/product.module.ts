import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RelatedProductComponent } from './related-product/related-product.component';

import { ProductRoutingModule } from './product-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductPageComponent, ProductDetailComponent, RelatedProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
