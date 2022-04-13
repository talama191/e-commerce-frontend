import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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
  gettrending():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending`)
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

  addProduct(
    name:String, 
    price:number,
    shortDescription:String,
    longDescription:String, 
    categoryName:String, 
    img1: File, 
    img2:File ):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', img1,img1.name);
    formData.append('file', img2,img2.name);
      
    let headers= new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', '*/*'); 
    return this.httpClient.post( `${this.baseUrl}/add?name=${name}&price=${price}&shortDescription=${shortDescription}&longDescription=${longDescription}&categoryName=${categoryName}`, formData);
    }

  uploadImage(img1: File):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', img1,img1.name);
  
    let headers= new HttpHeaders();

    headers.set('Content-Type', '');
    headers.set('Accept', "multipart/form-data"); 

    return this.httpClient.post( `http://localhost:8080/minio/upload/bucket/files`, formData);
  }

}
