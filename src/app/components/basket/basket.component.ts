import { Component } from '@angular/core';
import { DataService } from '../../services/data.service'
import { BasketItem } from "src/app/models/BasketItem";
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { select, Store } from '@ngrx/store';
import * as basketSelector from '../../store/selectors/basket.selectors'
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(
    private readonly dataService: DataService,
    private store$: Store
  ) {}

  public itemsInTheBasket$ = this.store$.pipe(select(basketSelector.selectBasketItems));

  addToBasket(itemToAdd: Item){
    this.dataService.updateBasket(itemToAdd, true);
  }

  removeFromBasket(itemToRemove: Item){
    this.dataService.updateBasket(itemToRemove, false);
  }
}
