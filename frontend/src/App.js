import Footer from './components/footer';

import React from "react";
import "./style.scss";
import Header from './components/header';
import HomePage from './components/homePage';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
