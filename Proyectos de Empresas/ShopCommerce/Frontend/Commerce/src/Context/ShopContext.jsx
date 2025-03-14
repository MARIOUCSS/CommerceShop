import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/data.js";
import PropTypes from "prop-types"; // Importa PropTypes
//import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const currency = "S";
  const delivery_changes = 10;

  const AddToCart = (ItemId, size) => {
    if (!size) {
      toast.error("Ingresar la Talla");
      return;
    }
    let CartData = structuredClone(cartItems);
    //cuando presiona no hay nada entonces
    if (CartData[ItemId]) {
      //SI HAY TALLA SE AUMENTA 1
      if (CartData[ItemId][size]) {
        CartData[ItemId][size] += 1;
      } else {
        //SI NO HAY TALLA SE CREA SE PONE 1
        CartData[ItemId][size] = 1;
      }
    } else {
      //{2: {…}}
      //  {2:{ "":1}}
      CartData[ItemId] = {};
      CartData[ItemId][size] = 1;
    }
    setcartItems(CartData);
  };
  const GetCartCount = () => {
    // {2:{
    //   m:2
    // }}
    let total = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            total += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return total;
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const value = {
    products,
    currency,
    delivery_changes,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    AddToCart,
    GetCartCount,
    cartItems,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo de React y sea obligatorio
};
