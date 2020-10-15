import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInterface} from '../inetface';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {
URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UserInterface[]>{
    return this.httpClient.get<UserInterface[]>(`${this.URL}`);
  }

  getUserById(id): Observable<UserInterface>{
    return this.httpClient.get<UserInterface>(`${this.URL}?id=${id}`);
  }
}
