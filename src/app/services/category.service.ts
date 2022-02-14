import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/category';
  constructor(private httpClient: HttpClient, private router: Router) { }

  findAll():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/all`);
  }
}
