import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./Home/Hero";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="bg-secondary ">
      <Hero />
      </div>
        
      
    </div>
  );
}

export default App;
