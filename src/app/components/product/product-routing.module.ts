import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'product',
    component: MainLayoutComponent,
    children: [
      { path: ':id', component: ProductDetailComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule

  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
