import { NgModule } from '@angular/core'
import { AuthGuard } from 'src/app/auth.guard'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { OrdersComponent } from './orders/orders.component'
import { AddOrderComponent } from './add-order/add-order.component'
import { EditOrderComponent} from './edit-order/edit-order.component'
import { ProductsComponent } from './products/products.component'
import { AddProductComponent } from './add-product/add-product.component'
import { EditProductComponent} from './edit-product/edit-product.component'
import { CategoriesComponent } from './categories/categories.component'
import { AddCategoryComponent } from './add-category/add-category.component'
import { EditCategoryComponent } from './edit-category/edit-category.component'
import { VouchersComponent } from './vouchers/vouchers.component'
import { AddVoucherComponent } from './add-voucher/add-voucher.component'

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {path: '', component: AdminComponent},
      {path: 'order', component: OrdersComponent},
      {path: 'order/add', component: AddOrderComponent},
      {path: 'order/edit/:id', component: EditOrderComponent},
      {path: 'product', component: ProductsComponent},
      {path: 'product/add', component: AddProductComponent},
      {path: 'product/edit/:id', component: EditProductComponent},
      {path: 'category', component: CategoriesComponent},
      {path: 'category/add', component: AddCategoryComponent},
      {path: 'category/edit/:id', component: EditCategoryComponent},
      {path: 'voucher', component: VouchersComponent},
      {path: 'voucher/add', component: AddVoucherComponent}
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