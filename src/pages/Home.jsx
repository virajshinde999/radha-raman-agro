import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import HowToOrder from "../components/HowToOrder";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProductSection />
        <HowToOrder />
      </main>



      <Footer />

    </>
  );
}

export default Home;