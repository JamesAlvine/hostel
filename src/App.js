import "./App.css";
import Navbar from "./common/navbar/Navbar";

// importing router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/about/About";
import Gallery from "./component/gallery/Gallery";
import Login from "./component/login/Login";
import Footer from "./common/footer/Footer";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
