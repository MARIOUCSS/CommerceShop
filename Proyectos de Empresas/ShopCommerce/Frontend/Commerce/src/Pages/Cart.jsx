import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/ShopContext";
import { FaMinus, FaPlus, FaRegWindowClose } from "react-icons/fa";
import CartTotal from "../Components/CartTotal";
// {2: {…}, 4: {…}}
// 2
// :
// {M: 1, XL: 1, L: 1}
// 4
// :
// {S: 1, XXL: 1}
function Cart() {
  // , products, currency,
  const {
    GetCartCount,
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useGlobalState();
  const [cartData, setCartData] = useState([]);
  const [quantities, setquantities] = useState({});
  useEffect(() => {
    const tempData = [];
    const initialQuanties = {};
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
          initialQuanties[`${items}-${item}`] = cartItems[items][item];
        }
      }
    }

    setCartData(tempData);
    setquantities(initialQuanties);
    console.log(initialQuanties);
  }, [cartItems]);

  const Increment = (id, size) => {
    const key = `${id}-${size}`;
    // {2-L:1 ,1-M:1}
    const newValue = quantities[key] + 1;

    setquantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, size, newValue);
  };
  const Decrement = (id, size) => {
    const key = `${id}-${size}`;
    // {2-L:1 ,1-M:1}
    if (quantities[key] > 1) {
      const newValue = quantities[key] - 1;

      setquantities((prev) => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  };
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 bg-white rounded-2xl my-6">
          <div className="flex items-baseline gap-x-4">
            <h3 className="h3">
              Cart <span className="text-secondary">List</span>
            </h3>
            <p className="bold-20">({GetCartCount()})items</p>
          </div>
          {/*Container */}
          <div className="mt-6">
            {cartData.map((item, i) => {
              //todos los productos generales va buscar que products por id se parecen
              const ProductData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.size}`;
              return (
                <div key={i} className="p-2 rounded-lg">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-start gap-6">
                      <img
                        src={ProductData.image[0]}
                        alt=""
                        className="w-16 sm:w-24 "
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between">
                        <h5>{ProductData.name}</h5>
                        <FaRegWindowClose
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="text-secondary"
                        />
                      </div>
                      <p className="bold-14 my-0.5">{item.size}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center ring-1 rounded-full overflow-hidden">
                          <button className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaMinus
                              onClick={() => Decrement(item._id, item.size)}
                              className="text-xs  cursor-pointer"
                            />
                          </button>
                          <p className="px-2">{quantities[key]}</p>
                          <button className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaPlus
                              onClick={() => Increment(item._id, item.size)}
                              className="text-xs cursor-pointer"
                            />
                          </button>
                        </div>
                        <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
                          {currency}
                          {ProductData.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-auto w-4/5 mt-2 h-[1px]" />
                </div>
              );
            })}
          </div>
          <div>
            <div className="w-[450px] mt-8 ">
              <CartTotal />
              {cartData && cartData.length ? (
                <button
                  onClick={() => navigate("/place-order")}
                  className="medium-14 bg-secondary text-white px-7 py-3 rounded-lg transition-all mt-7"
                >
                  Proceed To Checkout
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
