import Header from "../../components/app-header/app-header";

import background from '../../images/for-your-pleasure.png';

const GoodsPage = () => {
  const title = 'For your pleasure';
  return (
    <div>
      <Header 
      title={title}
      background={background}/>
    </div>
  );
}

export default GoodsPage;