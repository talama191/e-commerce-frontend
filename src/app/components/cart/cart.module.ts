import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
