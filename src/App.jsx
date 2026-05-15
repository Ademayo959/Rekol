import Navbar from "./Navbar";
import Hero from "./Hero";
import Trusted from "./Trusted";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

const App = () => {
  return ( 
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
   );
}
 
export default App;
