import './item-description.sass'

const ItemDescription = ({title, image, logo, variety}) => {
    return (
      <section className="item-description">
        <div className="item-description__wrapper">
          <img className="item-description__image" src={image} alt="Woman with cup of coffee" />
          <div className="item-description__content">
            <h3 className="item-description__content-title">{title}</h3>
            <img className="item-description__content-logo" src={logo} alt="Beans logo" />
            <div className="item-description__content-container">
              <span className="item-description__variety">{variety}</span>
              <p className='item-description__content-text'>
                <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="item-description__price">Price: 16.99$</span>
            </div>   
          </div>
        </div>
      </section>
    );
}

export default ItemDescription;