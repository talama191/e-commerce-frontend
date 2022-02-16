import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product';
  constructor(private httpClient: HttpClient, private router: Router) { }

  getProduct(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/viewList`)
  }

  getById(id:number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }

  getPagable(request:any): Observable<any>{
    const params = request;
    return this.httpClient.get(`${this.baseUrl}/pagination`,{params})
  }

  search(keyword:String): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/search?keyword=${keyword}`)
  }

  findByCategory(categoryName:String): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getByCategory/${categoryName}`)
  }
}
