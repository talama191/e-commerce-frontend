import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './navigation/cart/cart.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { SearchBarComponent } from './navigation/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    CartComponent,
    MenuComponent,
    SearchBarComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
