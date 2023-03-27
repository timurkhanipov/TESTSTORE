import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import * as basketSelector from '../../store/selectors/basket.selectors'

@Component({
  selector: 'app-basketcounter',
  templateUrl: './basketcounter.component.html',
  styleUrls: ['./basketcounter.component.css']
})
export class BasketcounterComponent {
  constructor(private store$: Store, private dataService: DataService) {
    this.itemsInTheBasketCount$ = this.store$.pipe(select(basketSelector.selectBasketItemsCount));
  }

  public itemsInTheBasketCount$!: Observable<number>;
}
