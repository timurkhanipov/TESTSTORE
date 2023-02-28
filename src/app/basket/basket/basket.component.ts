import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service'
import { BasketItem } from "src/app/models/BasketItem";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(
    private readonly dataService: DataService
  ) {}

  itemsInTheBasket$!: Observable<BasketItem[]>
  
  ngOnInit(){
    this.itemsInTheBasket$= this.dataService.GetBasketItems$()
  }
}
