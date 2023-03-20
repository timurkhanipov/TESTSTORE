import { Action } from "@ngrx/store";
import { BasketItem } from "src/app/models/BasketItem";
import { BasketState } from "../state/basket.state";

export enum EBasketActions {
    SET_BASKET_STATE = "[state] Set Basket State",
    GET_BASKET_STATE = "[state] Get Basket State"
}

export class SetBasketState implements Action {
    public readonly type = EBasketActions.SET_BASKET_STATE;
    constructor(public payload: {basketItems: BasketItem[]}){}
}

export class GetBasketState implements Action {
    public readonly type = EBasketActions.GET_BASKET_STATE;
}

export type BasketActions = SetBasketState;