import { createContext, useContext } from "react";
import { products } from "../assets/data.js";
export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};
export const GlobalProvider = (props) => {
  const currency = "S";
  const delivery_changes = 10;
  const value = { products, currency, delivery_changes };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
