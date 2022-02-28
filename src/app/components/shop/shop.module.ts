import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule, 
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
