import { EntityState } from "@ngrx/entity";
import { BasketItem } from "src/app/models/BasketItem";

export interface BasketState extends EntityState<BasketItem>{
}

export const initialBasketState: BasketState ={
    ids: [],
    entities: {}
}