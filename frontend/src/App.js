import Footer from './components/footer';

import React from "react";
import "./style.scss";
import Header from './components/header';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
        <div style={{ minHeight: 500 }}>
          <Outlet></Outlet>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
