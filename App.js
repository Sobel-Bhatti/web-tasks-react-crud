import React from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, Navigate} from 'react-router-dom';
import Products from './products/products';
import About from './components/About';
import Homepage from './components/homepage';
import TopMenu from './components/Torment';
import Notfound from './components/notfound';
import LoginPage from './components/login';
import NewProduct from './products/newproduct';
var cors = require('cors')




function App() {
  return (<div >

    <Router>
      <TopMenu/>
      <div style={{padding:"10px"}}>
            <Routes>
          <Route path="/"     element={<Homepage/>}/>
          <Route path="/products/new" element={<NewProduct/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/not-found" element={<Notfound/>}/>
          <Route path="/not-found" element={<Navigate replace to="/home" />} />
        </Routes>
        </div>
    </Router>
    </div>   
  );
}


export default App;

