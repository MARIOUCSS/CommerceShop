import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/ShopContext";
import Title from "./Title";
import Item from "./Item";

const NewArrivals = () => {
  const { products } = useGlobalState();
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      const data = products.slice(0, 10);

      setNewArrivals(data);
    }
  }, [products]);
  return (
    <section>
      <Title title={"New Arrivals"} titleStyles={"text-center"} />
      {/*container*/}
      <div className="">
        {newArrivals.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
