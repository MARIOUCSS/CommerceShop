import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [token, setToken] = useState(true);
  const ToogleMenu = () => {
    console.log("hola");
    setMenuOpened((prev) => !prev);
  };
  return (
    <header className="py-5 w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-4 margin lg:px-12 flex items-center justify-between">
        {/* logo */}
        <Link to={"/"} className="font-bold flex-1 xl:hidden ">
          <h4
            className="bg-white shadow-sm text-secondary flex items-center justify-center
          h-28 w-28 px-2 absolute -top-5 rounded-full "
          >
            Shoppire
          </h4>
        </Link>
        {/* Navbar */}
        <div className="flex-1">
          <Navbar />
        </div>
        {/* */}
        <Link to={"/"} className="font-bold flex-1 hidden xl:flex ">
          <h4
            className="bg-white shadow-sm text-secondary flex items-center justify-center
          h-28 w-28 px-2 absolute -top-5 rounded-full "
          >
            Shoppire
          </h4>
        </Link>
        {/** */}
        <div className="flex items-center justify-center gap-x-2 xs:gap-x-8">
          {!menuOpened && (
            //desaparece cuando la pantalla esta en modo larga pero cuando esta en responsive aparece
            <FaBarsStaggered
              onClick={ToogleMenu}
              className="xl:hidden cursor-pointer text-2xl"
            />
          )}
          <div>
            <FaSearch className="text-xl cursor-pointer" />
          </div>
          <Link to={"/cart"} className="flex relative">
            <GiBeachBag className="text-[25px]" />
            <span
              className="bg-secondary text-white text-[14px] font-[400]
 absolute right-0.5 -top-3 flex items-center justify-center w-5 h-5 rounded-full shadow-inner"
            >
              0
            </span>
          </Link>
          <div className="group relative">
            <div>
              <FaRegCircleUser className="text-2xl cursor-pointer" />
            </div>
            {token && (
              <>
                <ul className="bg-white shadow-sm p-3 w-32 ring-1 ring-slate-900/15 absolute right-0 flex-col">
                  <li>
                    <p>Orders</p>
                    <TbArrowNarrowRight />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
