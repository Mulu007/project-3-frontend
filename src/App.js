import About from "./components/About";
import Addbook from "./components/Addbook";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Collection/>
      <Addbook/>
      <Footer/>
    </div>
  );
}

export default App;
