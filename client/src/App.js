 import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="*" element={<Home />} />
       </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
