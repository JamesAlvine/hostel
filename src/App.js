import "./App.css";
import Navbar from "./common/navbar/Navbar";

// importing router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
