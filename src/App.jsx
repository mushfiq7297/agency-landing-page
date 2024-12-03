import "./App.css";
import Navbar from "./components/Navbar";
import About from "./Home/About";
import Hero from "./Home/Hero";
import Stat from "./Home/Stat";

function App() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
      <div className="bg-secondary ">
      <Hero />
      <About/>
      </div>
      <div className="bg-stat">
<Stat/>
      </div>
        
      
    </div>
  );
}

export default App;
