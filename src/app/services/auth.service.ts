import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string = '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Allow-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }
  private REST_URL = 'http://localhost:8080';
  errorData: {};
  constructor(private http: HttpClient, private router: Router) { }

  login(form: NgForm) {
    const url = `${this.REST_URL}/api/auth/login`;
    return this.http.post<any>(url, form.value, this.httpOptions).subscribe(data => {
      this.authToken = data.tokenType + ' ' + data.jwt;
      localStorage.setItem('authToken', this.authToken);
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
    }
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('authToken')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
    console.log("logout!")
  }

 
  
  getRole(authToken: any): string{
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(authToken);
    return decodedToken.roles[0].authority;
  }
}
