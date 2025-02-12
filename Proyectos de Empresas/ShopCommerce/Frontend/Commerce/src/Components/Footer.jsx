import {
  BsEnvelopeFill,
  BsFacebook,
  BsGeoAltFill,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-10 bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <h4 className="bold-24 text-secondary">Shoppire</h4>
            </Link>
            <p className="text-white mt-5">
              Crafted with care and dedication. Bringing quality and style right
              to your doorstep. Your satisfaction is our promise!
            </p>
            <p className="text-white mt-5">
              Copyright 2025 shoppire. All rights reserved.
            </p>
          </div>
          <div className="">
            <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
              Quik Links
            </h4>
            <ul className="space-y-3 text-[15px] font-[400]">
              <li className="text-gray-10">
                <a href="">About Us</a>
              </li>
              <li className="text-gray-10">
                <a href="">Products</a>
              </li>
              <li className="text-gray-10">
                <a href="">Services</a>
              </li>
              <li className="text-gray-10">
                <a href="">Contact</a>
              </li>
              <li className="text-gray-10">
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
              Contact Us
            </h4>
            <p className="text-gray-100">
              <BsTelephoneFill className="inline-block mr-2" />
              +51 676786
            </p>
            <p className="text-gray-100">
              <BsEnvelopeFill className="inline-block mr-2" />
              support@shoppire.com
            </p>
            <p className="text-gray-100">
              <BsGeoAltFill className="inline-block mr-2" />
              Lima,peru,San Miguel
            </p>
          </div>
          <div>
            <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
              Follow Us
            </h4>
            <div className="flex space-x-4 text-secondary">
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="mt-10">
          <p>
            Powered by <a href="#">Shoppire Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
