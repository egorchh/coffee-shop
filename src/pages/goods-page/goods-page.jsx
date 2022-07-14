import { Component } from "react";

import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";
import GoodsList from "../../components/goods-list/goods-list";

import background from '../../images/for-your-pleasure.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'
import descriptionImage from '../../images/cup-of-coffee.png'
import goodImage from '../../images/goods/good-image.png'

import './goods-page.sass'



class GoodsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Brasil", id: 1},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Kenya", id: 2},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Brasil", id: 3},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Kenya", id: 4},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Columbia", id: 5},
        {image: goodImage, description: 'AROMISTICO Coffee 1 kg', price: 6.99, variety: "Brasil", id: 6},
      ]
    }
  }

  render() {
    const title = 'For your pleasure';
    const descriptionTitle = 'About our goods';

    const {data} = this.state;

    return (
    <div className="goods-page__wrapper">
      <Header 
      title={title}
      background={background}/>
      <PageDescription
      descriptionImage={descriptionImage}
      title={descriptionTitle}
      logo={beansLogoBlack}/>
      <GoodsList
      data={data}/>
    </div>
  );
  }
  
}

export default GoodsPage;