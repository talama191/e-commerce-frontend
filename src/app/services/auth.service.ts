import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
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
  private REST_URL = 'http://localhost:8080';
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
    localStorage.removeItem('role');
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
}
