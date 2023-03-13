import { Component } from '@angular/core';
import { DataService } from '../../services/data.service'
import { BasketItem } from "src/app/models/BasketItem";
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(
    private readonly dataService: DataService
  ) {}

  public itemsInTheBasket$!: Observable<BasketItem[]>

  addToBasket(itemToAdd: Item){
    this.dataService.addItem(itemToAdd);
  }

  removeFromBasket(itemToRemove: Item){
    this.dataService.removeItem(itemToRemove);
  }
  
  ngOnInit(){
    this.itemsInTheBasket$ = this.dataService.getBasketItems();
  }
}
