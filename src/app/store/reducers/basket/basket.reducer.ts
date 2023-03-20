import { BasketState, initialBasketState } from "../../state/basket.state";
import * as basketAction from "../../actions/basket.actions"

export function BasketReducers(
    state = initialBasketState,
    action: basketAction.BasketActions): BasketState {
    switch (action.type) {
        case basketAction.EBasketActions.SET_BASKET_STATE: {
            return {
                ...state,
                basketItems: action.payload.basketItems
            }
        }
        default: return state;
    }
}