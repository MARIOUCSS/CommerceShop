import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/ShopContext";
import Title from "./Title";
import Item from "./Item";

const NewArrivals = () => {
  const { products } = useGlobalState();
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (products && products.length > 0) {
      const data = products.slice(0, 10);

      setNewArrivals(data);
      setIsLoading(false);
    }
  }, [products]);
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <Title title={"New Arrivals"} titleStyles={"text-center"} />
      {/*container*/}
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <p>Cargando...</p>
        ) : newArrivals.length > 0 ? (
          newArrivals.map((product) => (
            <div key={product._id}>
              <Item product={product} />
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
        {/* {newArrivals.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default NewArrivals;
