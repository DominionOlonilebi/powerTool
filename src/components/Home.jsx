import React from "react";
import About from "./landing-page/About";
import Services from "./landing-page/Services";
import Header from "./landing-page/Header";
import Background from "./landing-page/Background";
import ProjectCard from "./landing-page/ProjectCard";
import Testimonial from "./landing-page/Testimonial";
import Blog from "./landing-page/Blog";
import Footer from "./landing-page/Footer";
import Solution from "./landing-page/Solution";
import Cards from "./landing-page/Cards";

const Home = () => {
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
};

export default Home;
