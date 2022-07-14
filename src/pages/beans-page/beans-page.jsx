import { Component } from "react";

import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";
import Filter from "../../components/filter/filter";
import Search from "../../components/search/search";
import GoodsList from "../../components/goods-list/goods-list";

import background from '../../images/second-background.png'
import descriptionImage from '../../images/goods-description-image.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'
import goodImage from '../../images/goods/good-image.png'

import './beans-page.sass'


class BeansPage extends Component {
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
    const headerTitle = 'Our coffee';
    const descriptionTitle = 'About our beans';

    const {data} = this.state;

    return (
      <div className="beans-page__wrapper">
        <Header 
        title={headerTitle}
        background={background}/>
        <PageDescription 
        descriptionImage={descriptionImage}
        title={descriptionTitle}
        logo={beansLogoBlack}/>
        <div className="finder">
          <Search/>
          <Filter/>
        </div>
        <GoodsList 
        data={data}/>
      </div>
    );
  }
}

export default BeansPage;