import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/ShopContext";
import PropTypes from "prop-types"; // Importa PropTypes
import Item from "./Item";
import Title from "./Title";

function RelativeProducts({ category, subcategory }) {
  const { products } = useGlobalState();
  const [related, setRelated] = useState([]);
  useEffect(() => {
    console.log(category);
    console.log(subcategory);
    if (products.length > 0 && category && subcategory) {
      let filtered = products.slice();
      filtered = filtered.filter((item) => item.category === category);
      filtered = filtered.filter((item) => item.subCategory === subcategory);
      setRelated(filtered.slice(0, 5));
    }
    // console.log(related);
  }, [products, category, subcategory]);
  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <Title title={"Related Products"} titleStyles={"text-center"} />
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {related.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
RelativeProducts.propTypes = {
  category: PropTypes.string.isRequired, // 'category' es obligatorio y debe ser un string
  subcategory: PropTypes.string.isRequired, // 'subcategory' es obligatorio y debe ser un string
};
//nwwe arribvals
export default RelativeProducts;
