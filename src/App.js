import "./App.css";
import Header1 from "./components/header/Header1";
import Home from "./components/home/Home";
import About from "./components/about/About";
function App() {
  return (
    <>
      <Header1 />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
