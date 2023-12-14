
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import "./index.css"
import Nav from './components/nav/nav'
import './components/nav/nav.css'
import Footer from './components/footer/footer'
import './components/footer/footer.css'
import Home from './pages/home/home';
import Catalog from './pages/catalog/catalog';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Catalog" element ={<Catalog/>} /> 
        <Route path="/Cart" element ={<div class="cart">Cart </div>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
