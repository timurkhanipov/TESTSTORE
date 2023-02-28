import { Injectable } from '@angular/core';
import { BehaviorSubject, count, from, Observable, of, Subject, take } from 'rxjs';
import { Item } from "src/app/models/Item";
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { BasketItem } from '../models/BasketItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public itemToAdd$ = new Subject<Item>()
  public itemCount$ = new BehaviorSubject<number>(0)
  public totalPrice$ = new Subject<number>()

  itemsInTheBasket: Item[] = []
  basketItems: BasketItem[] = []
  itemsInTheBasketCount: number = 0

  public AddItem(item: Item){
    this.itemsInTheBasket.push(item);
    this.itemToAdd$.next(item);
    this.itemsInTheBasketCount++;
    this.itemCount$.next(this.itemsInTheBasketCount);
  }

  public GetItems$(): Observable<Item[]>{
    return this.http.get<Item[]>('https://fakestoreapi.com/products');
  }

  public GetItemsInTheBasketCount$(){
    return of (this.itemsInTheBasketCount);
  }

  public GetBasketItems$(): Observable<BasketItem[]> {
    const basketItemsObservable = from(this.itemsInTheBasket);
    const basketList = new Set(this.itemsInTheBasket);
    const basketItemArray: Item[] = Array.from(basketList);
    let basketItems: BasketItem[] = [];

    basketItemArray.forEach(function(item){
      let totalCount: number = 0;
      const counter = basketItemsObservable.pipe(count(x => x.id === item.id));
      counter.subscribe(num => totalCount = num)
      const bItem: BasketItem = {
        title: item.title,
        id: item.id,
        totalPrice: (Number(item.price)*totalCount).toString(),
        qty: totalCount.toString()
      }
      basketItems.push(bItem);
    });

    this.basketItems = basketItems
    return of (basketItems);
  }

  public GetBasketTotalPrice$(){
    let totalPrice: number = 0;
    this.basketItems.forEach(function(basketitem){
      totalPrice = totalPrice + Number(basketitem.totalPrice)
    });
    return of (totalPrice)
  }
}
