import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';

import { CartModule } from './components/cart/cart.module';
import { HomeModule } from './components/home/home.module';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { ProductModule } from './components/product/product.module';
import { ShopModule } from './components/shop/shop.module';
import { LoginModule } from './components/login/login.module';
import { Interceptor } from './intercepter/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    CartModule,
    HomeModule,
    LoginRoutingModule,
    ProductModule,
    ShopModule,
    LoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
