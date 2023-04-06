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
import * as Basket from './basket.reducer';
import { RootState } from '../state/root.state';
import { hydrationMetaReducer } from './hydration.reducer';

export interface State {
  //basketItemsCount: BasketState;
}

export const reducers: ActionReducerMap<RootState> = {
  basketItems: Basket.BasketReducers,
};


export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
