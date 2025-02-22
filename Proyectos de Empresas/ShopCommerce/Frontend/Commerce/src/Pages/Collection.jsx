import { useEffect, useState } from "react";
import Title from "../Components/Title";
import { useGlobalState } from "../Context/ShopContext";
import Item from "../Components/Item";
//import { products } from "../assets/data";

function Collection() {
  const { products } = useGlobalState();
  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setCateogory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const applyFilter = () => {
    let filtered = [...products];
    if (category.length) {
      filtered = filtered.filter((prod) => category.includes(prod.category));
    }
    if (subcategory.length) {
      filtered = filtered.filter((prod) =>
        subcategory.includes(prod.subCategory)
      );
    }

    return filtered;
  };
  const applySorting = (productList) => {
    switch (sortType) {
      case "low":
        return productList.sort((a, b) => a.price - b.price);
      case "high":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  };
  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting();
    setfilterProduct(sorted);
  }, [category, subcategory, sortType, products]);
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <div className="flex flex-col sm:flex-row gap-8 mt-8 xl:mt-6">
        {/* {left} */}
        <div className="min-w-60 bg-white p-4 rounded-2xl">
          <div className="bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5 className="mb-4">Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 ">
                  <input type="checkbox" value={cat} className="w-5" />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          {/* filter */}
          <div className="bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5 className="mb-4">Type</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Topwear", "Bottomwear", "Winterwear"].map((subcat) => (
                <label key={subcat} className="flex gap-2 medium-14 ">
                  <input type="checkbox" value={subcat} className="w-5" />
                  {subcat}
                </label>
              ))}
            </div>
          </div>
          <select className="medium-14 h-8 w-full border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6">
            <option value="relevant" className="font-medium">
              Sort By:Relevant
            </option>
            <option value="low" className="font-medium">
              Sort By:Low
            </option>
            <option value="high" className="font-medium">
              Sort By:High
            </option>
          </select>
        </div>
        {/* {Right} */}
        <div className="bg-white p-6 rounded-2xl">
          <Title title={"Our Collection"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-5">
            {filterProduct.length > 0 ? (
              filterProduct.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p>No Products for selected </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
