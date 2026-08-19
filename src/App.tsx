import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Featured from "./components/Featured";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Featured />
        <Skills />
        <Tools />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
