import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostInterface} from '../inetface';

@Injectable({
  providedIn: 'root'
})
export class AllPostService {
URL = 'https://jsonplaceholder.typicode.com/posts?userId=';
URL2 = 'https://jsonplaceholder.typicode.com/posts?id=';
  constructor(private httpClient: HttpClient) { }

  getPostOfUser(id): Observable<PostInterface[]>{
    return this.httpClient.get<PostInterface[]>(`${this.URL}${id}`);
  }

  getPostByPostId(id): Observable<PostInterface>{
    return this.httpClient.get<PostInterface>(`${this.URL2}${id}`);
  }
}
