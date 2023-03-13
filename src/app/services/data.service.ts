import { Injectable } from '@angular/core';
import { BehaviorSubject, count, from, Observable, of, Subject, take } from 'rxjs';
import { Item } from "src/app/models/Item";
import { BasketItem } from '../models/BasketItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  itemsInTheBasket: Item[] = []
  basketItems: BasketItem[] = []
  itemsInTheBasketCount: number = 0
  basketTotalPrice: number = 0

  public itemToAdd$ = new Subject<Item>()
  public itemCount$ = new BehaviorSubject<number>(0)
  public basketTotalPrice$ = new BehaviorSubject<number>(this.basketTotalPrice)
  public itemsInTheBasket$ = new BehaviorSubject<BasketItem[]>(this.basketItems)

  public addItem(item: Item){
    this.formBasket(item, true);
    this.countBasketTotalPrice();
    this.itemsInTheBasketCount++;
    this.itemCount$.next(this.itemsInTheBasketCount);
  }

  public removeItem(item: Item){
    this.formBasket(item, false);
    this.countBasketTotalPrice();
    this.itemsInTheBasketCount--;
    this.itemCount$.next(this.itemsInTheBasketCount);
  }

  public getItemsInTheBasketCount(){ 
    return this.itemCount$;
  }

  public getBasketItems(){
    return this.itemsInTheBasket$;
  }

  private formBasket(newItem: Item, isAdded: boolean){
    if(isAdded){
      this.itemsInTheBasket.push(newItem);
    }
    else{
      let index = this.itemsInTheBasket.findIndex(x => x.id === newItem.id);
      this.itemsInTheBasket.splice(index,1);
    }
    const basketItemsObservable = this.itemsInTheBasket;
    const basketList = new Set(this.itemsInTheBasket);
    const basketItemArray: Item[] = Array.from(basketList);
    let basketItems: BasketItem[] = [];

    basketItemArray.forEach(function(item){
      const totalCount = basketItemsObservable.filter(x => x.id === item.id).length;
      const bItem: BasketItem = {
        item: item,
        totalPrice: (Number(item.price)*totalCount).toString(),
        qty: totalCount.toString()
      }
      basketItems.push(bItem);
    });

    this.basketItems = basketItems;
    this.basketItems.sort(x => Number(x.item.id));
    this.itemsInTheBasket$.next(this.basketItems);
  }

  public getBasketTotalPrice(){
    return this.basketTotalPrice$;
  }

  private countBasketTotalPrice(){
    this.basketTotalPrice = 0;
    let totPrice: number =0;
    this.basketItems.forEach(function(basketitem){
      totPrice = totPrice + Number(basketitem.totalPrice)
    });
    this.basketTotalPrice = totPrice;
    this.basketTotalPrice$.next(this.basketTotalPrice);
  }
}
