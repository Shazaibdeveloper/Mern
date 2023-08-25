import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Logout from "./Logout";
import { createContext, useReducer } from "react";
import { initial, reducer } from "./Reducer/UseReducers";

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />{" "}
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
