import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from "src/app/models/Item";
import { BasketItem } from '../models/BasketItem';
import { select, Store } from '@ngrx/store';
import { BasketState } from '../store/state/basket.state';
import { GetBasketState, SetBasketState } from '../store/actions/basket.actions';
import * as basketSelector from '../store/selectors/basket.selectors'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private store$: Store<BasketState>
    ) {}
  
  private basketItemsObservable!: Observable<BasketItem[]>;
  
  public basketItems: BasketItem[] = [];

  public updateBasket(item: Item, isAddingItem: boolean){
    // this.basketItemsObservable = this.store$.pipe(select(basketSelector.selectBasketItems));
    // this.basketItemsObservable.subscribe(x => this.basketItems = x);
    isAddingItem? this.addToBasket(item): this.removeFromBasket(item);
    this.basketItems.sort((a, b) => {return a.item.id - b.item.id});
    this.store$.dispatch(new SetBasketState({basketItems: this.cloneBasketItems(this.basketItems)}));
  }

  private addToBasket(item: Item){
    if(this.basketItems.find(x => x.item.id === item.id) == null){
      let itemToAdd: BasketItem= {
        item: item,
        totalPrice: Number(item.price),
        qty: 1,
      };
      this.basketItems.push(itemToAdd);
    }
    else{
      this.basketItems.find(x => x.item.id === item.id)!.qty++;
    }
  }

  private removeFromBasket(item: Item){
    if(this.basketItems.find(x => x.item.id === item.id) !== null){
      this.basketItems.find(x => x.item.id === item.id)!.qty--;
      if(this.basketItems.find(x => x.item.id === item.id)?.qty === 0){
        let index = this.basketItems.findIndex(x => x.item.id === item.id);
        this.basketItems.splice(index,1);
      }     
    }
  }

  private cloneBasketItems(initialBasketItems: BasketItem[]): BasketItem[] {
    let addedItemsClone: BasketItem[] = [];
    initialBasketItems.forEach(function(bItem){
        let bItemClone: BasketItem ={
            item : bItem.item,
            totalPrice: bItem.totalPrice,                
            qty: bItem.qty,
        };
        addedItemsClone.push(bItemClone);
    });
    return addedItemsClone;
  }
}
