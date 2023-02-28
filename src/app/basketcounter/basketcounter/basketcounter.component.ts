import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
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

  subs!: Subscription
  public itemsInTheBasketCount$!: Subject<number>;

  ngOnInit(): void {
    this.itemsInTheBasketCount$ = this.dataService.itemCount$;
  }
}
