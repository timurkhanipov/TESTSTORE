import { Action } from "@ngrx/store";
import { Item } from "src/app/models/Item";

export enum EBasketActions {
    ADD_BASKET_ITEM = "[state] Add Basket Item",
    REMOVE_BASKET_ITEM = "[state] Remove Besket Item"
}

export class AddBasketItem implements Action {
    public readonly type = EBasketActions.ADD_BASKET_ITEM;
    constructor(public payload: {item: Item}){}
}

export class RemoveBasketItem implements Action {
    public readonly type = EBasketActions.REMOVE_BASKET_ITEM;
    constructor(public payload: {basketItemId: number}){}
}

export type BasketActions = AddBasketItem | RemoveBasketItem;