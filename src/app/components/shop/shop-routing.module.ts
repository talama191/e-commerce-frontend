import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ShopComponent } from './shop.component';
import { ShopCategoryComponent } from './shopCategory/shop-category.component';

const routes: Routes = [
  { 
    path: 'shop',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ShopComponent},
      {path: ':keyword', component: ShopComponent},
      {path: 'category/:category', component: ShopCategoryComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forChild(routes)
  ]
})
export class ShopRoutingModule { }
