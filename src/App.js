import "./App.css";
import Header1 from "./components/header/Header1";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Header1 />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
