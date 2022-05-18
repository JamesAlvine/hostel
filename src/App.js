import "./App.css";
import Navbar from "./common/navbar/Navbar";

// importing router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/about/About";
import Gallery from "./component/gallery/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/gallery"  element={<Gallery />} />
            
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
