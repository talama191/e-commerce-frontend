import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdminComponent } from './components/admin/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path:'detail', component:ProductDetailComponent,pathMatch: 'full'},
  // {path:'shop',component:ShopComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
