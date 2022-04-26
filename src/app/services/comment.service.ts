import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentForm } from '../models/comment-form';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'https://ecommerce-hanu-fit.herokuapp.com/comment';
  constructor(private httpClient:HttpClient) { }

  getComment(productId:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/product?productId=${productId}`)
  }

  addComment(commentForm:CommentForm):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/add`,commentForm)
  }
}
