import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrls: ['./totalprice.component.css']
})
export class TotalpriceComponent implements OnInit {
  constructor(
    public dataService: DataService
  ) {}

  public totalPrice$!: Observable<number>;

  ngOnInit(): void {
    this.totalPrice$ = this.dataService.GetBasketTotalPrice$();
  }
}
