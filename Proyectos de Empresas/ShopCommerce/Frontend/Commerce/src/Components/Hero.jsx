import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-8 mb-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-hero bg-cover bg-center bg-no-repeat h-[736px] w-full rounded-tl-3xl rounded-tr-3xl  mt-6">
        <div className="relative max-w-[777px] top-48">
          <h5 className="flex items-baseline gap-x-2 uppercase text-secondary medium-22">
            MODERN COLLECTION
            <BsFire />
          </h5>
          <h1 className="max-w-[611px] text-3xl ">
            Elevate your Look with every click shop today
          </h1>
          <p className="pl-2  mt-6 mb-8 max-w-lg">
            Discover quality and style with our premiun collection Shop
            confidently for unique ,fashionable that elevate your wardrobel
          </p>
          <div className="flex gap-2 sm:gap-6 mt-14">
            <Link className="medium-14 bg-tertiary text-white px-7 py-3 rounded-lg ">
              Latest Products
            </Link>
            <Link className="medium-14 bg-secondary text-white px-7 py-3 rounded-lg">
              Popular Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
