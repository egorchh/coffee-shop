import './home-our-best.sass';

import paperBg from '../../../../images/paper-background.jpg';
import solimoCoffee from '../../../../images/goods/solimo-coffee.png';
import prestoCoffee from '../../../../images/goods/presto-coffee.png';

import GoodsList from '../home-goods-list/goods-list';

const OurBest = () => {

  const goodsData = [
    {image: solimoCoffee, description: 'Solimo Coffee Beans 2 kg', price: 10.73, id: 1},
    {image: prestoCoffee, description: 'Presto Coffee Beans 1 kg', price: 15.99, id: 2},
    {image: solimoCoffee, description: 'AROMISTICO Coffee 1 kg', price: 6.99, id: 3},
  ]

  return (
    <section className="home-best">
      <img className="home-best__background" src={paperBg} alt="Paper background" />
      <h3 className="home-best__title">Our best</h3>
      <GoodsList data={goodsData}/>
    </section>
  );
}

export default OurBest;