import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    OrdersComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    VouchersComponent,
    AddVoucherComponent,
    CategoriesComponent,
    AddCategoryComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ]
})
export class AdminModule {
 }
