import aboutImg from "../assets/about.png";
import { RiBlazeLine } from "react-icons/ri";
import Footer from "../Components/Footer";
function About() {
  const statistics = [
    { label: "Satisfied Customers", value: 99 },
    { label: "Exclusive Products", value: 12 },
    { label: "New Products", value: 15 },
  ];
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 bg-white rounded-2xl my-6">
          <div className="flex flex-col xl:flex-row gap-10 ">
            {/* container */}
            {/* // <div> */}
            {/* left side */}
            <div className="flex-1 relative">
              <div className="bg-secondary rounded-3xl rounded-tr-[135px] w-[458px]">
                <img src={aboutImg} alt="" />{" "}
              </div>
              <div className="bg-white absolute bottom-0  flex items-center justify-center left-16 rounded-2xl p-4 max-w-xs flex-col shadow-sm">
                <span className="relative bottom-8 p-3 text-white h-12 w-12 flex items-center rounded-full bg-secondary">
                  <RiBlazeLine className="text-2xl" />
                </span>
                <p className="text-center relative bottom-3">
                  Discover fashion that speaks to your style. Elevate your with
                  exclusive collection
                </p>
              </div>
            </div>
            {/* Right sile */}
            <div className="flex-1 flex  flex-col justify-center">
              <span className="text-[18px] font-[500] text-secondary">
                Unveiling Our Journey
              </span>
              <h2 className=" max-w-[472px] leading-tight md:text-[35px] md:leading-[1.3] mb-4 font-bold">
                Our Commitment to Crafting Individualized Fashion Experiences
              </h2>
              <p className="py-5">
                Discover the essence of style, where each piece is crafted with
                care and precision. We bring fashion that speaks to
                individuality and quality. From the latest trends to timeless
                classics, we are dedicated to elevating your wardrobe with
                exceptional designs that fit every occasion, personality, and
                season, making fashion a true expression of self.
              </p>
              {/* {statistics} */}
              <div className="flex flex-wrap gap-4">
                {statistics.map((Static, index) => (
                  <div
                    key={index}
                    className="bg-primary text-secondary p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-1">
                      <div className="text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold">
                        {Static.value}k
                      </div>
                      <h4 className="bold-22">+</h4>
                    </div>
                    <p>{Static.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
    // @apply mx-auto max-w-[1440px] px-6 lg:px-12;
  );
}

export default About;
