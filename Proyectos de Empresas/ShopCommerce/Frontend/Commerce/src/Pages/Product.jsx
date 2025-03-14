import { useParams } from "react-router-dom";
import { useGlobalState } from "../Context/ShopContext";
import { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import Footer from "../Components/Footer";
import RelativeProducts from "../Components/RelativeProducts";
import Title from "../Components/Title";
//import { FaSearch } from "react-icons/fa";
function Product() {
  const { productId } = useParams();
  // const value = {
  //   products,
  //   currency,
  //   delivery_changes,
  //   search,
  //   setSearch,
  //   showSearch,
  //   setShowSearch,
  // };
  const { products, currency, AddToCart } = useGlobalState();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProduct(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 mt-6">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16  flex gap-8 flex-col sm:flex-row bg-white rounded-2xl">
          {/* Se pone el flex para despues usar el flex-1 en parte iguales si es 1440 se divide 740 partes uiguales */}
          <div className="flex flex-1 gap-x-2 xl:flex-1">
            {/* Uno al costado del otro */}
            <div className="flex items-center justify-center flex-col gap-[7px] flex-wrap">
              {product?.image?.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={i}
                  alt="ProductImg"
                  className="max-h-[89px] rounded-lg"
                />
              ))}
            </div>
            <div>
              <img src={image} alt="" className="rounded-xl bg-gray-10" />
            </div>
          </div>
          {/**Product Info */}
          <div className="flex-[1.5] rounded-2xl px-2">
            {/* <h3>{product.name}</h3>
            <Title /> */}
            <Title title={product.name} titleStyles={"text-center"} />
            <div className="flex gap-x-5">
              <h3 className="text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold">
                {currency}
                {product.price}
              </h3>
              <div className="flex items-center gap-x-4 text-secondary mb-6">
                <div className="flex gap-x-2 text-secondary text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span>(122)</span>
              </div>
            </div>
            <p>{product.description}</p>
            <div className="flex flex-col gap-4 mb-5">
              <div className="flex gap-2">
                {product.sizes && Array.isArray(product.sizes) ? (
                  [...product.sizes]
                    .sort((a, b) => {
                      const order = ["S", "M", "L", "XL", "XXL"];
                      return order.indexOf(a) - order.indexOf(b);
                    })
                    .map((item, i) => (
                      <button
                        onClick={() => setSize(item)}
                        key={i}
                        className={`${
                          item === size ? "text-white" : "boder-slate-900"
                        } border-[1.5px] border-tertiary h-8 w-10 bg-primary space-x-2 rounded-md`}
                      >
                        {item}
                      </button>
                    ))
                ) : (
                  <p>No sizes available</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => AddToCart(product._id, size)}
                className="medium-14 bg-tertiary text-white px-7 py-3 rounded-lg"
              >
                Add to Cart
              </button>
              <button className="medium-14 bg-primary border border-slate-900/5 px-7 py-3 rounded-lg hover:bg-white transition-all duration-300">
                <FaHeart />
              </button>
            </div>
            <div className="flex gap-x-4 mt-4 items-center ">
              <FaTruckFast className="text-lg" />
              <span>Free Delivery on orders over 500$</span>
            </div>
            <hr className="my-4 w-2/3" />
            <div className="mt-2 flex flex-col gap-1">
              <p>Authenticity You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <RelativeProducts
          category={product.category}
          subcategory={product.subCategory}
        />
      </div>
      <Footer />
    </section>
  );
}

export default Product;
