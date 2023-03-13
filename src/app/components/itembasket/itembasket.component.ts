import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { BasketItem } from '../../models/BasketItem';

@Component({
  selector: 'app-itembasket',
  templateUrl: './itembasket.component.html',
  styleUrls: ['./itembasket.component.css']
})
export class ItembasketComponent {

@Input() basketitem!: BasketItem;

@Output()
itemToTheBasket = new EventEmitter<Item>();
@Output()
itemToRemove = new EventEmitter<Item>();

onAddHandler(itemToAdd: Item){
  this.itemToTheBasket.emit(itemToAdd);
}

onRemoveHandler(itemToRemove: Item){
  this.itemToRemove.emit(itemToRemove);
}

}

