import PropTypes from "prop-types"; // Importa PropTypes
import { Link } from "react-router-dom";
function Item({ product }) {
  return (
    <div className="ring-1 ring-slate-900/5 rounded-xl bg-white overflow-hidden">
      <Link
        to={`/product/${product._id}`}
        className="flex items-center justify-center relative"
      >
        <img src={product.image[0]} alt="productImg" />
      </Link>
      <div className="p-3">
        <h4 className="font-bold mb-2 text-[16px] md:text-[17px] line-clamp-1 !my-0">
          {product.name}
        </h4>
        <div className="flex  items-center justify-center pt-1 gap-x-5">
          <p className="font-bold">{product.category}</p>
          <h5 className="text-[14px] md:text-[15px] mb-1 font-bold text-secondary pr-2 ">
            ${product.price}.00
          </h5>
        </div>
        <p className="line-clamp-2 py-1">{product.description}</p>
      </div>
    </div>
  );
}
Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
      PropTypes.string, // Acepta un string
      PropTypes.arrayOf(PropTypes.string), // O un array de strings
    ]).isRequired,
    // Valida que product sea un objeto con una propiedad name de tipo string
  }).isRequired, // Valida que product sea obligatorio
};
export default Item;
