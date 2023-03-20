import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BasketItem } from "src/app/models/BasketItem";
import { BasketState } from "../state/basket.state";

const getBasketFeatureState = createFeatureSelector<BasketState>(
    "basketItems"
);

export const selectBasketItems = createSelector(
    getBasketFeatureState,
    (state: BasketState) => state.basketItems
)

export const selectBasketItemsCount = createSelector(
    getBasketFeatureState,
    (state: BasketState) => {
        return state.basketItems.reduce((sum: number, basketItem: BasketItem) => sum + Number(basketItem.qty), 0);
    }
)

export const selectBasketTotalPrice = createSelector(
    getBasketFeatureState,
    (state: BasketState) => {
        return state.basketItems.reduce((sum: number, basketItem: BasketItem) => sum + basketItem.totalPrice * Number(basketItem.qty), 0);
    }
)