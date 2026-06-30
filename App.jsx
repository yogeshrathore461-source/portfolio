import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Training from "./pages/Training";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home">
  <Home />
</section>

<section id="about">
  <About />
</section>

<section id="education">
  <Education />
</section>

<section id="training">
  <Training />
</section>

<section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="resume">
  <Resume />
</section>

<section id="contact">
  <Contact />
</section>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#aaa",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "20px",
        }}
      >
        © {new Date().getFullYear()} Yogesh Kumar Rathore — Built with React
      </footer>
    </div>
  );
}