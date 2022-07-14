import Header from '../../components/app-header/app-header'
import ItemDescription from '../../components/item-description/item-description';

import background from '../../images/second-background.png'
import beansLogoBlack from '../../images/beans-logo-black.svg'
import descriptionImage from '../../images/goods/aromistico.jpg'


import './goods-item-page.sass'

const GoodsItemPage = ({data}) => {
  const headerTitle = 'Our coffee';
  const descriptionTitle = 'About it';
  
  return (
    <>
      <Header
        title={headerTitle}
        background={background}/>
      <ItemDescription
        data={data}
        title={descriptionTitle}
        logo={beansLogoBlack}
        image={descriptionImage}/>
    </>
  );
}

export default GoodsItemPage;