import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plan from "./components/Plan/Plan";
import Testimonial from "./components/Testimonial/Testimonial";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
