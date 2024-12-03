import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Home/About";
import Comments from "./Home/Comments";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Stat from "./Home/Stat";

function App() {
  return (
    <div className="scroll-smooth">
      <div className="max-w-6xl mx-auto ">
        <Navbar />
      </div>
      <div className="bg-secondary ">
        <Hero />
        <About />
      </div>
      <div className="bg-stat">
        <Stat />
      </div>
      <div className="bg-secondary mx-auto">
        <Services/>
      </div>
      <div className="pb-20 bg-secondary">
        <Comments/>
      </div>
      <div className="bg-navyBlue">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
