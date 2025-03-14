import { useEffect, useState } from "react";
import Title from "../Components/Title";
import { useGlobalState } from "../Context/ShopContext";
import Item from "../Components/Item";
import ShowSearch from "../Components/ShowSearch";
//import { products } from "../assets/data";

function Collection() {
  // "Women", "Topwear", "Winterwear"
  const { products, search, showSearch } = useGlobalState();
  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const tooglefilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const applyFilter = () => {
    let filtered = [...products];
    if (search && showSearch) {
      filtered = filtered.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //Si hay un producto
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
    // console.log("prueba", sortType);
    switch (sortType) {
      case "low":
        return productList.sort((a, b) => a.price - b.price);
      case "high":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  };
  //Si cambia el categy se ejecuta de nuevo
  //el useefect
  useEffect(() => {
    //primero entra los products por completo cuando inicia no tiene nada filtrado
    //y carga completo los productos
    let apply = applyFilter();
    //despues entra por apply sortin pero como esta en relevant
    // devuelve los productos sin el preico menor a mayor al menos qu cambie ahu se modifica

    let productf = applySorting(apply);
    setfilterProduct(productf);
    console.log(sortType);
  }, [category, subcategory, sortType, products, search, showSearch]);

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <div className="flex flex-col sm:flex-row gap-8 mt-8 xl:mt-6">
        {/* {left} */}
        <div className="min-w-60 bg-white p-4 rounded-2xl">
          {/* search */}
          <ShowSearch />
          <div className="bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5 className="mb-4">Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 ">
                  <input
                    onChange={(e) => tooglefilter(e.target.value, setCategory)}
                    type="checkbox"
                    value={cat}
                    className="w-5"
                  />
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
                  <input
                    onChange={(e) =>
                      tooglefilter(e.target.value, setSubcategory)
                    }
                    type="checkbox"
                    value={subcat}
                    className="w-5"
                  />
                  {subcat}
                </label>
              ))}
            </div>
          </div>
          <select
            //  onChange={(e) => tooglefilter(e.target.value, setSortType)}
            onChange={(e) => setSortType(e.target.value)}
            className="medium-14 h-8 w-full border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6"
          >
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
