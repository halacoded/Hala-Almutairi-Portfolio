import "./App.css";
import Header1 from "./components/header/Header1";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
function App() {
  return (
    <>
      <Header1 />
      <main>
        <Home />
        <About />
        <Services />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
//
