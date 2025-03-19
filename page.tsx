import HeroSection from "./sections/HeroSection";
import Header from "./components/Header";
import RatingOnClutch from "./sections/RatingOnClutch";
import FeaturedProjects from "./sections/FeaturedProjects";
import ServicesProvide from "./sections/ServicesProvide";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";
import FaqSection from "./sections/FaqSection";
import Footer from "./components/Footer";
export default function Home() {
  return (

    <>
    <Header/>
    <HeroSection/>
    <RatingOnClutch/>
    <FeaturedProjects/>
    <ServicesProvide/>
    <WhyWorkWithMe/>
    <FaqSection/>
    <Footer/>
    </>
  );
}
