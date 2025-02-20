import { useEffect, useState } from "react";
import Title from "./Title";
import { useGlobalState } from "../Context/ShopContext";
import Item from "./Item";

function PopularProducts() {
  const { products } = useGlobalState();
  const [popularProducts, setpopularProducts] = useState([]);
  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setpopularProducts(data.slice(0, 6));
  }, [products]);
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <Title title={"Popular Products"} titleStyles={"text-center"} />
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
