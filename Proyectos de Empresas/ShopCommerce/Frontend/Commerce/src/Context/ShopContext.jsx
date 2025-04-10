import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/data.js";
import PropTypes from "prop-types"; // Importa PropTypes
//import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
  const updateQuantity = (itemId, size, quantity) => {
    let cartdata = structuredClone(cartItems);
    cartdata[itemId][size] = quantity;
    setcartItems(cartdata);
  };

  const GetCartAmonut = () => {
    let Totalamount = 0;

    for (const items in cartItems) {
      let Iteminfo = products.find((x) => x._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            Totalamount += cartItems[items][item] * Iteminfo.price;
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return Totalamount;
  };
  useEffect(() => {
    // console.log("aqui");
    // console.log(cartItems);
    // //console.log();
    // console.log(GetCartAmonut());
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
    updateQuantity,
    GetCartAmonut,
    navigate,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo de React y sea obligatorio
};
