const GoodsItem = (props) => {
  const {image, description, price} = props;

  return (
    <li className="home-best__item">
      <div className="card">
        <div className="card-wrapper">
          <img className="card__image" src={image} alt="Solimo coffee beans" />
          <span className="card__title">{description}</span>
          <span className="card__price">{price}$</span>
        </div>
      </div>
    </li>
  );
}

export default GoodsItem;