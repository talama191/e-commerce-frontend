import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AuthGuard } from 'src/app/auth.guard';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  {
    path: 'cart',
    component: MainLayoutComponent,
    children: [
      {path: '', component: CartItemComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CartRoutingModule { }
