import { Component } from "react";

import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";
import GoodsList from "../../components/goods-list/goods-list";

import background from '../../images/for-your-pleasure.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'
import descriptionImage from '../../images/cup-of-coffee.png'

import './goods-page.sass'



class GoodsPage extends Component {
  render() {
    const title = 'For your pleasure';
    const descriptionTitle = 'About our goods';

    const {data} = this.props;

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