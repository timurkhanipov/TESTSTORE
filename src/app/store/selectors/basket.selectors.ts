import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BasketState } from "../state/basket.state";
import * as _ from "../reducers/basket.reducer";

const getBasketFeatureState = createFeatureSelector<BasketState>(
    "basketItems"
);

export const selectBasketItems = createSelector(
    getBasketFeatureState, _.basketAdapter.getSelectors().selectAll
)

export const selectBasketItemsCount = createSelector(
    getBasketFeatureState,
    (state: BasketState) => {
        return state !== undefined? Object.values(state.entities).reduce((sum, basketItem) => sum + Number(basketItem!.qty), 0): 0;
    }
)

export const selectBasketTotalPrice = createSelector(
    getBasketFeatureState,
    (state: BasketState) => {
        return state !== undefined? Object.values(state.entities).reduce((sum, basketItem) => sum + basketItem!.totalPrice * Number(basketItem!.qty), 0): 0;
    }
)