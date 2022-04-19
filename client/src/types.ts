export interface Product {
  id: number;
  name: string;
  retail_price: number;
  sale_price: number;
  quantity: number;
  date_added: string;
  date_modified: string;
}

export interface ProductInput {
  name: string;
  retail_price: number;
  sale_price: number;
  quantity: number;
}

export enum ButtonAction {
  EDIT = "EDIT",
  DELETE = "DELETE",
}
