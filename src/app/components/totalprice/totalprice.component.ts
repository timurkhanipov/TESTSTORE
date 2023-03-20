import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import * as basketSelector from '../../store/selectors/basket.selectors'

@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrls: ['./totalprice.component.css']
})
export class TotalpriceComponent {
  constructor(private store$: Store, private dataService: DataService) {
    this.totalPrice$ = this.store$.pipe(select(basketSelector.selectBasketTotalPrice));
  }

  public totalPrice$!: Observable<number>;
}
