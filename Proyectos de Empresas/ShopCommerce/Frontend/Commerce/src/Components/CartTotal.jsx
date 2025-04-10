import { useGlobalState } from "../Context/ShopContext";

function CartTotal() {
  const { currency, GetCartAmonut, delivery_changes } = useGlobalState();
  return (
    <div className="w-full">
      <h3 className="text-[22px] font-[500] mb-5">
        Cart <span className="text-secondary">Total</span>
      </h3>
      <div className="flex items-center justify-between pt-3">
        <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">Subtotal:</h4>
        <p className="font-bold">
          {currency}
          {GetCartAmonut()}.00
        </p>
      </div>
      <hr />
      <div className="flex items-center justify-between pt-3">
        <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
          Shipping Free:
        </h4>
        <p className="font-bold">
          {GetCartAmonut() === 0 ? "0.00" : `${currency}${delivery_changes}.00`}
        </p>
      </div>
      <hr />
      <div className="flex items-center justify-between pt-3">
        <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">Total:</h4>
        <p className="font-bold">
          {currency}
          {GetCartAmonut() === 0 ? 0.0 : GetCartAmonut() + delivery_changes}.00
        </p>
      </div>
      <hr />
    </div>
  );
}

export default CartTotal;
