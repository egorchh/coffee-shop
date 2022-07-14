import './home-our-best.sass';

import paperBg from '../../../../images/paper-background.jpg';

import GoodsList from '../home-goods-list/home-goods-list';

const OurBest = ({data}) => {

  const visibleData = [];

  for (let i = 0; i < 3; i ++) {
    visibleData.push(data[i]);
  }

  return (
    <section className="home-best">
      <img className="home-best__background" src={paperBg} alt="Paper background" />
      <h3 className="home-best__title">Our best</h3>
      <GoodsList data={visibleData}/>
    </section>
  );
}

export default OurBest;