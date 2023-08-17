 import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Register from './Components/Register';
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
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
       </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
