import { BasketItem } from "src/app/models/BasketItem";

export class BasketState{
    basketItems: BasketItem[] = [];
}

export const initialBasketState: BasketState ={
    basketItems: []
}