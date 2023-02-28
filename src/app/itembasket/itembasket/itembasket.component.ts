import { Component, Input } from '@angular/core';
import { BasketItem } from '../../models/BasketItem';

@Component({
  selector: 'app-itembasket',
  templateUrl: './itembasket.component.html',
  styleUrls: ['./itembasket.component.css']
})
export class ItembasketComponent {

@Input() basketitem!: BasketItem;

onAddHandler(itemToAdd: BasketItem){

}

onRemoveHandler(itemToRemove: BasketItem){

}

}

