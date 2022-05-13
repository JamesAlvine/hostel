import './App.css';
import Navbar from './common/navbar/Navbar';

// importing router components
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
     <>     
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element/>
        {/* <Route path="/about" element={<Teams />}/>
          <Route path="/gallery" element={<Team />} />
          <Route path="/destinations" element={<NewTeamForm />} />
          <Route path="/blog" element={<Team />} />
          <Route path="/testimonial" element={<Team />} />
          <Route path="/contact" element={<Team />} /> */}
      
    </Routes>
  </BrowserRouter>
     </>
  );
}

export default App;
