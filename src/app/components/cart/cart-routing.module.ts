import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: CartPageComponent}
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
