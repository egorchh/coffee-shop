import {Link} from "react-router-dom";

import './goods-item.sass';

const GoodsItem = ({image, description, price, variety}) => {
  return(
    <li className="goods__item">
      <Link className="goods__link" to='/goods-item'>
        <div className="card">
          <div className="card-wrapper">
            <img className="card__image" src={image} alt="Solimo coffee beans" />
            <span className="card__title">{description}</span>
            <span className="card__variety">{variety}</span>
            <span className="card__price">{price}$</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default GoodsItem;