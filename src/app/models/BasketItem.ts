import { Item } from "./Item";

export interface BasketItem {
  item: Item;
  qty: string;
  totalPrice: string;
}
