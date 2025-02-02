import { FaRegWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { SiGooglehome, SiAtlassian, SiMaildotcom } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";
function Navbar({ menuOpened, toggleMenu, containerStyles }) {
  const navItems = [
    { to: "/", label: "Home", icon: <SiGooglehome /> },
    { to: "/collection", label: "Collection", icon: <BsCollectionFill /> },
    { to: "/about", label: "About", icon: <SiAtlassian /> },
    {
      to: "/mailto:support@shoppire.com",
      label: "Contact",
      icon: <SiMaildotcom />,
    },
  ];
  return (
    <nav className={containerStyles}>
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-2x1 self-end cursor-pointer relative text-secondary"
          />

          <Link to={"/"} className="bold-24 mb-10">
            <h4 className="text-secondary">Shoppire</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? " text-secondary relative after:w-[40%] after:h-[2px] after:rounded-full after:bg-secondary after:absolute after:-bottom-1 after:right-0 flex items-center justify-center gap-x-2"
                : "flex items-center justify-center"
            }
            onClick={menuOpened && toggleMenu}
          >
            {icon}
            <h5>{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
