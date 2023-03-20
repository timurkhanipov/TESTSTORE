import { Item } from "./Item";

export interface BasketItem {
  item: Item;
  qty: number;
  totalPrice: number;
}
