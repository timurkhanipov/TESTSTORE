import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-basketcounter',
  templateUrl: './basketcounter.component.html',
  styleUrls: ['./basketcounter.component.css']
})
export class BasketcounterComponent implements OnInit {
  constructor(
    private readonly dataService: DataService
  ) {}

  public itemsInTheBasketCount$ = this.dataService.getItemsInTheBasketCount();

  ngOnInit(): void {
  }
}
