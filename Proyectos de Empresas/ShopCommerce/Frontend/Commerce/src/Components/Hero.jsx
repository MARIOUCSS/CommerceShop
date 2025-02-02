import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-6 xl:mb-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-hero bg-cover bg-center bg-no-repeat h-[736px] w-full rounded-tl-3xl rounded-tr-3xl  mt-6">
        <div>
          <h5>
            MODERN COLLECTION
            <BsFire />
          </h5>
          <h1>Elevate your Look with every click shop today</h1>
          <p>
            Discover quality and style with our premiun collection Shop
            confidently for unique ,fashionable that elevate your wardrobel
          </p>
          <div>
            <Link>Latest Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
