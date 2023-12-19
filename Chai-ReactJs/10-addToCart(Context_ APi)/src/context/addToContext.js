import { createContext, useContext } from "react";
//1
export const AddToCartContext = createContext({
  add: 0,
  addToCart: () => {},
  removeToCart: () => {},
});
//2
export const AddToCartProvider = AddToCartContext.Provider;
//3
export default function useCart() {
  return useContext(AddToCartContext);
}
