import Navbar from "./Navbar"
import Hero from "./Hero";
import Trusted from "./Trusted";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTAsection from "./CTAsection";
import Footer from "./Footer";

const Landing = () => {
  return ( 
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Testimonials />
      <FAQ />
      <CTAsection />
      <Footer />
    </div>
   );
}
 
export default Landing;