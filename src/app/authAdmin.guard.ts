import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const authToken = localStorage.getItem('authToken');
    if (authToken != null) {
      if (this.authService.getRole() == 'ADMIN'){
        return true;
      }
    }
    this.router.navigate(["admin/login"])
  }
  
}
