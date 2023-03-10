import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(
    private readonly dataService: DataService
) {}

  @Input() item!: Item;

  @Output()
  itemToTheBasket = new EventEmitter<Item>()

  onAddHandler(item: Item): void{
    this.itemToTheBasket.emit(this.item)
  }
}
