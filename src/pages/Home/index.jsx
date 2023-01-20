import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "../../components/Sections/About";
import Banner from "../../components/Sections/Banner";
import Contact from "../../components/Sections/Contact";
import Testimonials from "../../components/Sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
