import './home-our-best.sass';

import paperBg from '../../../../images/paper-background.jpg'
import solimoCoffee from '../../../../images/goods/solimo-coffee.png'
import prestoCoffee from '../../../../images/goods/presto-coffee.png'
import aromisticoCoffee from '../../../../images/goods/aromistico-coffee.png'

const OurBest = () => {
  return (
    <section className="home-best">
      <img className="home-best__background" src={paperBg} alt="Paper background" />
      <h3 className="home-best__title">Our best</h3>
      <ul className="home-best__list">
        <li className="home-best__item">
          <div className="card">
            <img className="card__image" src={solimoCoffee} alt="Solimo coffee beans" />
            <span className="content__title">Solimo Coffee Beans 2 kg</span>
            <span className="content__price">10.73$</span>
          </div>
        </li>
        <li className="home-best__item">
          <div className="card">
            <img className="card__image" src={prestoCoffee} alt="Presto coffee beans" />
            <span className="content__title">Presto Coffee Beans 1 kg</span>
            <span className="content__price">15.99$</span>
          </div>
        </li>
        <li className="home-best__item">
          <div className="card">
            <img className="card__image" src={aromisticoCoffee} alt="Aromistico coffee beans" />
            <span className="content__title">AROMISTICO Coffee 1 kg</span>
            <span className="content__price">6.99$</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default OurBest;