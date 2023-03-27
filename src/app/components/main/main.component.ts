import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service'
import { Item } from '../../models/Item';
import { HttpService } from 'src/app/services/http.service';
import { BasketItem } from "src/app/models/BasketItem";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    public httpService: HttpService,
    public dataService: DataService
  ) {}

  public items$!: Observable<Item[]>;

  addToBasket(item: Item){
    this.dataService.updateBasket(item, true);
  }

  ngOnInit(): void {
    this.items$ = this.httpService.getItems();
  }
}
