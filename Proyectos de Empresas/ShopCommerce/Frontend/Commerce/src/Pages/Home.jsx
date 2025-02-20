import Features from "../Components/Features ";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NewArrivals from "../Components/NewArrivals";
import PopularProducts from "../Components/PopularProducts ";

function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <PopularProducts />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
