import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]>{
    return this.http.get<Item[]>('https://fakestoreapi.com/products');
  }
}
