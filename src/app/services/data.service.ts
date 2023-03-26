import { Injectable } from '@angular/core';
import { Item } from "src/app/models/Item";
import { BasketItem } from '../models/BasketItem';
import { Store } from '@ngrx/store';
import { BasketState } from '../store/state/basket.state';
import { AddBasketItem, RemoveBasketItem } from '../store/actions/basket.actions';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private store$: Store<BasketState>
    ) {}
  
  public basketItems: BasketItem[] = [];

  public updateBasket(item: Item, isAddingItem: boolean){
    isAddingItem? this.addToBasket(item): this.removeFromBasket(item);
    this.basketItems.sort((a, b) => {return a.item.id - b.item.id});
  }

  private addToBasket(item: Item){
    this.store$.dispatch(new AddBasketItem({item: item}));
  }

  private removeFromBasket(item: Item){
    this.store$.dispatch(new RemoveBasketItem({basketItemId: item.id}));
  }
}
