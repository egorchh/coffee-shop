import { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from '../app-footer/app-footer';

import BeansPage from '../../pages/beans-page/beans-page';
import GoodsPage from '../../pages/goods-page/goods-page';
import HomePage from '../../pages/home-page/home-page';


import './app.sass'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/beans" element={<BeansPage/>} />
            <Route path="/goods" element={<GoodsPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
    
  
}

export default App;