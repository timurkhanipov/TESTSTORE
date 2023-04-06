import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { ItembasketComponent } from '../itembasket/itembasket.component';
import { TotalpriceComponent } from '../totalprice/totalprice.component';
import { StoreModule } from '@ngrx/store';
import { BasketReducers } from 'src/app/store/reducers/basket.reducer';

@NgModule({
  declarations: [
    BasketComponent,
    ItembasketComponent,
    TotalpriceComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    StoreModule.forFeature('basket', BasketReducers )
  ]
})
export class BasketModule { }
