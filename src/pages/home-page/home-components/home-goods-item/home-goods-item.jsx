import { Link } from 'react-router-dom';

const GoodsItem = (props) => {
  const {image, description, price, changeCurData} = props;

  return (
    <li className="home-best__item">
      <Link to='/goods-item' className='link'>
        <div className="card" onClick={changeCurData}>
          <div className="card-wrapper">
            <img className="card__image" src={image} alt="Solimo coffee beans" />
            <span className="card__title">{description}</span>
            <span className="card__price">{price}$</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default GoodsItem;