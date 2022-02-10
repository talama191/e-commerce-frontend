import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { 
    path: 'shop',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ShopComponent}
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
