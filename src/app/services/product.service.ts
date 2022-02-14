import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product';
  constructor(private httpClient: HttpClient, private router: Router) { }

  getProduct(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/viewList`)
  }
}
