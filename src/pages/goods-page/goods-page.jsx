import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";

import background from '../../images/for-your-pleasure.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'
import descriptionImage from '../../images/cup-of-coffee.png'


const GoodsPage = () => {
  const title = 'For your pleasure';
  const descriptionTitle = 'About our goods';
  return (
    <div>
      <Header 
      title={title}
      background={background}/>
      <PageDescription
      descriptionImage={descriptionImage}
      title={descriptionTitle}
      logo={beansLogoBlack}/>
    </div>
  );
}

export default GoodsPage;