import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ItemComponent } from '../item/item.component';
import { BasketReducers } from 'src/app/store/reducers/basket/basket.reducer';

@NgModule({
  declarations: [
    MainComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature('basket', BasketReducers)
  ]
})
export class MainModule { }
