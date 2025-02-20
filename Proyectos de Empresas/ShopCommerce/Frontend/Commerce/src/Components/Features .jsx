import Title from "./Title";
import { TbArrowBackUp } from "react-icons/tb";
function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
      <Title title={"Our Features"} titleStyles={"text-center"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl">
        <div className="p-4 bg-white rounded-3xl">
          <TbArrowBackUp className="bold-32 mb-3 text-yellow-400" />
          <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
            Easy Return
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tenetur dolorem alias illum perspiciatis animi?
          </p>
        </div>
        <div className="p-4 bg-white rounded-3xl">
          <TbArrowBackUp className="bold-32 mb-3 text-yellow-400" />
          <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
            Fast Delivery
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tenetur dolorem alias illum perspiciatis animi?
          </p>
        </div>
        <div className="p-4 bg-white rounded-3xl">
          <TbArrowBackUp className="bold-32 mb-3 text-yellow-400" />
          <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">
            Secure Payment
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tenetur dolorem alias illum perspiciatis animi?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
