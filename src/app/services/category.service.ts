import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'https://ecommerce-hanu-fit.herokuapp.com/category';
  constructor(private httpClient: HttpClient, private router: Router) { }

  findAll():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

  addCategory(form: NgForm):Observable<any> {
    const data = {
      "id": 0,
      "name": form.value.name
    }
    return this.httpClient.post(`${this.baseUrl}/addCategory`, data)
  }
}
