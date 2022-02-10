import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { GallerlyComponent } from './gallerly/gallerly.component';
import { SliderComponent } from './slider/slider.component';
import { TrendingComponent } from './trending/trending.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomeComponent, SliderComponent, BannerComponent, BestSellerComponent, BrandComponent, CategoryComponent, GallerlyComponent, TrendingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, CarouselModule
  ]
})
export class HomeModule { }
