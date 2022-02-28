import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PasswordChangeComponent } from './password-change/password-change.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
