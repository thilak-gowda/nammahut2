// import logo from './logo.svg';
// import './App.css';
// import IndiaMap from './components/indiamap'

// function App() {
//   return (
//     <div className="App">
//       <IndiaMap />
//     </div>
//   );
// }

// export default App;
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IndiaMap from "./components/indiamap";
import About from "./components/about";
import Navsec from "./components/navbar";
import AllProducts from "./components/allproducts";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <div className="Navbar">
      
      <Router>
      <Navsec />
        <Routes>
          <Route path="/" element={<IndiaMap />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </Router>

    </div>
  );
}

export default NavBar;
