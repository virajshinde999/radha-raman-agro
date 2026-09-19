import Header from "../components/Header";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import NaturalProcess from "../components/about/NaturalProcess";
import ProductShowcase from "../components/about/ProductShowcase";

function About() {
  return (
    <>
      <Header />

      <main className="about-page">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <WhyChooseUs />
        <NaturalProcess />
        <ProductShowcase />
     
      </main>
    </>
  );
}

export default About;