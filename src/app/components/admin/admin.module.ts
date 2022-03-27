import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ProductsComponent } from './products/products.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    OrdersComponent,
    AddOrderComponent,
    ProductsComponent,
    EditOrderComponent,
    AddProductComponent,
    EditProductComponent,
    VouchersComponent,
    AddVoucherComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule {
 }
