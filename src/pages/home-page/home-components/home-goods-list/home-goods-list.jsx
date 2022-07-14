import GoodsItem from "../home-goods-item/home-goods-item";

const GoodsList = ({data}) => {

  const elements = data.map(item => {
    const {id} = item;
    return (
      <GoodsItem
      key={id}
      image={item.image}
      description={item.description}
      price={item.price}/>
    );
  })
  
  return (
    <ul 
    className="home-best__list">
      {elements}
    </ul>
  );
}

export default GoodsList;