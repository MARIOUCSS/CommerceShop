import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGooglehome, SiAtlassian, SiMaildotcom } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";
function Navbar({ menuOpened, toggleMenu, containerStyles }) {
  const navItem = [
    { to: "/", label: "Home", icon: <SiGooglehome /> },
    { to: "/collection", label: "Collection", icon: <BsCollectionFill /> },
    { to: "/about", label: "Home", icon: <SiAtlassian /> },
    {
      to: "/mailto:support@shoppire.com",
      label: "Contact",
      icon: <SiMaildotcom />,
    },
  ];
  return (
    <nav>
      {menuOpened && (
        <>
          <FaRegWindowClose onClick={toggleMenu} className="text-2x1" />

          <Link to={"/"}>
            <h4 className="text-secondary">Shoppire</h4>
          </Link>
        </>
      )}
      {navItem}
    </nav>
  );
}

export default Navbar;
