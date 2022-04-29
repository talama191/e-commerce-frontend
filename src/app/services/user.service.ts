import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private baseUrl = 'https://ecommerce-hanu-fit.herokuapp.com/user-management/';
  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`https://ecommerce-hanu-fit.herokuapp.com/user-management/user/all`)
  }
}
