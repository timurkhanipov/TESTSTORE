import { BasketState, initialBasketState } from "../state/basket.state";
import * as basketAction from "../actions/basket.actions";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { BasketItem } from "src/app/models/BasketItem";

export const basketAdapter: EntityAdapter<BasketItem> = createEntityAdapter<BasketItem>();

export function BasketReducers(
    state = initialBasketState,
    action: basketAction.BasketActions): BasketState {
    switch (action.type) {
        case basketAction.EBasketActions.ADD_BASKET_ITEM: {
            let currentBasketItem: BasketItem | undefined = state.entities[action.payload.item.id];
            if (currentBasketItem !== undefined) {
                const updateBasketItem: BasketItem = { 
                    id: currentBasketItem.item.id,
                    item: currentBasketItem.item,
                    totalPrice: currentBasketItem.totalPrice,
                    qty: currentBasketItem.qty + 1 }
                return basketAdapter.updateOne({ id: currentBasketItem.item.id!, changes: updateBasketItem }, state);
            }
            else {
                let basketItemToAdd: BasketItem = {
                    id: action.payload.item.id,
                    item: action.payload.item,
                    totalPrice: Number(action.payload.item.price),
                    qty: 1,
                };
                return basketAdapter.addOne(basketItemToAdd, state);
            }
        }
        case basketAction.EBasketActions.REMOVE_BASKET_ITEM: {
            let currentBasketItem: BasketItem | undefined = state.entities[action.payload.basketItemId];
            if (currentBasketItem?.qty !== undefined && currentBasketItem.qty > 1) {
                const updateBasketItem: BasketItem = { id: currentBasketItem.item.id, item: currentBasketItem.item, totalPrice: currentBasketItem.totalPrice, qty: currentBasketItem.qty - 1 }
                return basketAdapter.updateOne({ id: currentBasketItem.item.id!, changes: updateBasketItem }, state);
            }
            else {
                return basketAdapter.removeOne(action.payload.basketItemId, state)
            }
            
        }
        default: return state;
    }
}