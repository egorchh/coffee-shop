import { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from '../app-footer/app-footer';

import BeansPage from '../../pages/beans-page/beans-page';
import GoodsPage from '../../pages/goods-page/goods-page';
import GoodsItemPage from '../../pages/goods-item-page/goods-item-page';
import HomePage from '../../pages/home-page/home-page';

import goodImage from '../../images/goods/good-image.png'

import './app.sass'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {image: goodImage, description: 'Solimo Coffee Beans 2 kg', price: 6.99, variety: "Brasil", id: 1},
        {image: goodImage, description: 'Presto Coffee Beans 1 kg', price: 16.99, variety: "Kenya", id: 2},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 13.99, variety: "Brasil", id: 3},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 24.99, variety: "Kenya", id: 4},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 11.99, variety: "Columbia", id: 5},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 10.99, variety: "Brasil", id: 6},
      ],
      curData: [],
    }
  }

  changeCurData = (id) => {
    console.log(id);
    this.setState(({data}) => {
      return {
        curData: data.filter(item => item.id === id)
      };
    });
  }

  render() {
    const {data, curData} = this.state;
    return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage 
            data={data}
            changeCurData={this.changeCurData}/>} />
            <Route path="/beans" element={<BeansPage 
            data={data}
            onUpdateSearch={this.onUpdateSearch}
            changeCurData={this.changeCurData}/>} />
            <Route path="/goods" element={<GoodsPage 
            data={data}
            changeCurData={this.changeCurData}/>} />
            <Route path="/goods-item" element={<GoodsItemPage 
            data={curData}/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
    
  
}

export default App;