import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [{
  path: 'profile',
  component: MainLayoutComponent,
  // canActivate: [AuthGuard],
  children: [
    {path: '', component: UserDetailComponent},
    {path: 'password', component: PasswordChangeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
