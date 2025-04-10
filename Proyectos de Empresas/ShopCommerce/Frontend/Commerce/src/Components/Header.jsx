import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { useGlobalState } from "../Context/ShopContext";
function Header() {
  const { setShowSearch, GetCartCount } = useGlobalState();
  const [menuOpened, setMenuOpened] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  const ToogleMenu = () => {
    setMenuOpened((prev) => !prev);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };
  return (
    <header className="py-5 w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-4 margin lg:px-12 flex items-center justify-between">
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
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={ToogleMenu}
            containerStyles={`${
              menuOpened
                ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 shadow-x1"
                : "hidden xl:flex gap-x-5 xl:gap-x-8 medium-15 rounded-full px-2 py-1"
            }`}
          />
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
            <FaSearch
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-xl cursor-pointer"
            />
          </div>
          <Link to={"/cart"} className="flex relative">
            <GiBeachBag className="text-[25px]" />
            <span
              className="bg-secondary text-white text-[14px] font-[400]
 absolute right-0.5 -top-3 flex items-center justify-center w-5 h-5 rounded-full shadow-inner"
            >
              {GetCartCount()}
            </span>
          </Link>
          {/* Al padre ese pone group y al hijo se pone  */}
          <div className="group relative">
            {/* 
token es false  en true pero tiene que estar escondio group-hover:flex
            / */}
            <div onClick={() => !token && navigate("/login")}>
              <FaRegCircleUser className="text-2xl cursor-pointer" />
            </div>
            {token && (
              <>
                <ul
                  className=" bg-white shadow-sm p-3 w-32 ring-1 ring-slate-900/15
                 absolute right-0 flex-col hidden group-hover:flex"
                >
                  <li
                    onClick={() => navigate("/orders")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <p>Orders</p>
                    <TbArrowNarrowRight className="text-[19px] cursor-pointer" />
                  </li>
                  <hr className="my-2" />
                  <li
                    onClick={logout}
                    className="flex items-center justify-between opacity-50"
                  >
                    <p>Logout</p>
                    <TbArrowNarrowRight className="text-[19px] opacity-50" />
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
