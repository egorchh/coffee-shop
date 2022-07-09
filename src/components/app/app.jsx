import { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import BeansPage from '../../pages/beans-page';
import GoodsPage from '../../pages/goods-page';
import HomePage from '../../pages/home-page';

import Navbar from "../app-navbar/app-navbar";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/beans" element={<BeansPage/>} />
            <Route path="/goods" element={<GoodsPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
    
  
}

export default App;