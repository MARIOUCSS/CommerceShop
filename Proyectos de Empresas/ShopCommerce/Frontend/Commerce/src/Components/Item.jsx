import PropTypes from "prop-types"; // Importa PropTypes
import { Link } from "react-router-dom";
function Item({ product }) {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <img src={product.image[0]} alt="" />
      </Link>
      <div>
        <h4>{product.name}</h4>
        <div>
          <p>{product.category}</p>
          <h5>${product.price}.00</h5>
        </div>
        <p>{product.description}</p>
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
