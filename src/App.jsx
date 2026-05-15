import Navbar from "./Navbar";
import Hero from "./Hero";
import Trusted from "./Trusted";
import Features from "./Features";

const App = () => {
  return ( 
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
    </div>
   );
}
 
export default App;
