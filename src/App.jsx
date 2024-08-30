import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Creative from "./Components/Creative/Creative";
import About from "./Components/About/About";
import Services from "./Components/Offers/Services";
import Contributors from "./Components/Contributors/Contributors";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Creative />
      <About />
      <Services />
      <Contributors />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
