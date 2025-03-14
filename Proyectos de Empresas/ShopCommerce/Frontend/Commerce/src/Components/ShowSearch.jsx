import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/ShopContext";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function ShowSearch() {
  const { search, setSearch, showSearch } = useGlobalState();
  const [visible, setvisible] = useState(false);
  const location = useLocation();
  console.log("====>", visible);
  //https://www.example.com/products/shoes.
  // if (location.pathname.includes("products")) {
  //   console.log("Estás en la sección de productos.");
  // } else {
  //   console.log("No estás en la sección de productos.");
  // }
  // En este caso, como location.pathname es "/products/shoes",
  //  el método includes("products") devolverá true, y se imprimirá:
  // "Estás en la sección de productos."
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      //http://localhost:5173/collection ====> /collection
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);
  //cuando inicia este componente visible es true pero cuando aprieta el buscador el showsearch cambia a true hay re
  //recien se muestra
  return showSearch && visible ? (
    <section className="py-4 pb-7">
      <div className="text-center bg-primary">
        <div className="inline-flex items-center px-3 justify-center ring-3 ring-slate-900/5 py-1.5 rounded-full w-full bg-primary overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="border-none outline-none w-full bg-primary"
          />
          <div>
            <FaSearch className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  ) : null;
}

export default ShowSearch;
