import { useState } from "react";
import CartTotal from "../Components/CartTotal";
import Footer from "../Components/Footer";
import { useGlobalState } from "../Context/ShopContext";

function PlaceOrder() {
  const { navigate } = useGlobalState();
  const [method, setmethod] = useState("cod");
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 ">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 bg-white rounded-2xl my-6">
          <div action="" className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <h3 className="text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold">
                Delivery Information
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-full"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                required
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-full"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
                />
              </div>
            </div>
            {/* CartToTAL */}
            <div className="flex flex-1 flex-col gap-y-4 ">
              <CartTotal />
              Payment Method
              <div className="my-2">
                <h3 className="text-[20px] font-[700] ">
                  Payment <span>Method</span>
                </h3>
                <div className="flex gap-3 flex-col lg:flex-row">
                  <button
                    onClick={() => setmethod("Stripe")}
                    className={`${
                      method === "cod" ? "text-secondary" : ""
                    } medium-14 bg-primary border border-slate-900/5 px-7 py-2 rounded-lg hover:bg-white transition-all duration-300`}
                  >
                    Stripe
                  </button>
                  <button
                    onClick={() => setmethod("Cod")}
                    className={`${
                      method === "cod" ? "text-secondary" : ""
                    } medium-14 bg-primary border border-slate-900/5 px-7 py-2 rounded-lg hover:bg-white transition-all duration-300`}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="medium-14 bg-secondary text-white px-7 py-3 rounded-lg transition-all"
                  onClick={() => navigate("/orders")}
                >
                  Place Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default PlaceOrder;
