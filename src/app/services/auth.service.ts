import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string = '';
  currentUser:User;

  private httpOptions = {
    headers: new HttpHeaders({
      'Allow-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }
  private REST_URL = 'https://ecommerce-hanu-fit.herokuapp.com';
  errorData: {};
  constructor(private http: HttpClient, private router: Router) { }

  login(form: NgForm) {
    const url = `${this.REST_URL}/api/auth/login`;
    return this.http.post<any>(url, form.value, this.httpOptions).subscribe(data => {
      console.log(data)
      this.authToken = data.tokenType + ' ' + data.jwt;
      localStorage.setItem('authToken', this.authToken);
     console.log(data.userDetails.authorities[0].authority)
      localStorage.setItem('role', data.userDetails.authorities[0].authority)
      localStorage.setItem('userId', data.userDetails.id)
      this.router.navigate(['/'])
    }, error => {
         this.router.navigate(["login"])
         alert("wrong username or password")
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
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    console.log("logout!")
  }

 
  
  getRole(): string{
    const role = localStorage.getItem('role')
    if(role!=null){
      return role;
    }else{
      return "no-role";
    }
     
  }

  register(user:User):Observable<any>{
    return this.http.post(`${this.REST_URL}/api/auth/signup`,user)
  }
}
