import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";
import Filter from "../../components/filter/filter";

import background from '../../images/second-background.png'
import descriptionImage from '../../images/goods-description-image.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'
import Search from "../../components/search/search";

import './beans-page.sass'

const BeansPage = () => {
  const headerTitle = 'Our coffee';
  const descriptionTitle = 'About our beans';
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
    </div>
  );
}

export default BeansPage;