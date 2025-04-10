import { useGlobalState } from "../Context/ShopContext";

function Orders() {
  const { products, currency } = useGlobalState();
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 bg-white rounded-2xl my-6 max-xl:mt-8">
          {/* Titulo */}
          <div>
            <h3 className="text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold">
              Orders <span className="text-secondary">List</span>
            </h3>
          </div>
          {/*Product */}
          {products.slice(1, 5).map((item, i) => (
            <div key={i}>
              <div className="py-4 text-gray-500 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  {/* image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt=""
                      className="w-[77px] rounded-lg"
                    />
                  </div>
                  <div className="block w-full">
                    <h5 className=" text-[14px] md:text-[15px] mb-1 font-bold capitalize line-clamp-1">
                      {item.name}
                    </h5>
                    <div className="flex items-center justify-between">
                      {/* <div> */}
                      <div className="flex items-center gap-x-2 sm:gap-x-2 ">
                        <div className="flex items-center justify-center gap-x-2 ">
                          <h5 className="text-[14px] font-[400]">Price :</h5>
                          <p>
                            {currency}
                            {item.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-x-2">
                          <h5 className="text-[14px] font-[400]">Quantity :</h5>
                          <p>
                            {currency}
                            {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-x-2">
                          <h5 className="text-[14px] font-[400]">Size:</h5>
                          <p>
                            {currency}
                            {item.size}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-x-2">
                          <h5 className="text-[14px] font-[400]">Date :</h5>
                          <p className="text-[14px] font-[400]">
                            {new Date(item.date).toDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="text-[14px] font-[400]">Payment</h5>
                          <p className="text-gray-400">{item.paymentMethod}</p>
                        </div>
                      </div>
                      {/* {aca} */}
                      <div className="flex flex-col xl:flex-row gap-3">
                        <div className="flex items-center gap-2">
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>

                          <p>status</p>
                        </div>
                        <button className="medium-14 bg-secondary text-white px-7 py-3 rounded-lg transition-all !p-1.5 ">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-auto h-[1px] w-4/5 bg-gray-900/10 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orders;
