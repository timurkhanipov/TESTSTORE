import { Item } from "./Item";

export interface BasketItem {
  id: number;
  item: Item;
  qty: number;
  totalPrice: number;
}
