import { NgModule } from '@angular/core'
import { AuthGuard } from 'src/app/authAdmin.guard'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { OrdersComponent } from './orders/orders.component'
import { AddOrderComponent } from './add-order/add-order.component'
import { EditOrderComponent } from './edit-order/edit-order.component'
import { ProductsComponent } from './products/products.component'
import { AddProductComponent } from './add-product/add-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'
import { CategoriesComponent } from './categories/categories.component'
import { AddCategoryComponent } from './add-category/add-category.component'
import { EditCategoryComponent } from './edit-category/edit-category.component'
import { VouchersComponent } from './vouchers/vouchers.component'
import { AddVoucherComponent } from './add-voucher/add-voucher.component'
import { LoginComponent } from './login/login.component'
const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order', component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order/add', component: AddOrderComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order/edit/:id', component: EditOrderComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'product', component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'product/add', component: AddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'product/edit/:id', component: EditProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'category', component: CategoriesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'category/add', component: AddCategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'category/edit/:id', component: EditCategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'voucher', component: VouchersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'voucher/add', component: AddVoucherComponent,
        canActivate: [AuthGuard]
      },
      { path: 'login', component: LoginComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }