import "./App.css";
import About from "./components/About";
import Background from "./components/Background";
import Blog from "./components/Blog";
import Cards from "./components/Cards";
import FirstLayer from "./components/FirstLayer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbars from "./components/Navbars";
import ProjectCard from "./components/ProjectCard";
import Services from "./components/Services";
import Solution from "./components/Solution";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Background />
      <Cards />
      <About />
      <Solution />
      <Services />
      <ProjectCard />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
