import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { BasketState } from '../state/basket.state';
//import { basketReducers } from './basket/basket.reducer';
import * as Basket from './basket/basket.reducer';

export interface State {
  //basketItemsCount: BasketState;
}

export const reducers: ActionReducerMap<State> = {
  //basketItems: Basket.BasketReducers,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
