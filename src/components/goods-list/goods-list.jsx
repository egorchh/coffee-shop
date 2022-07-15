
import GoodsItem from '../goods-item/goods-item';

import './goods-list.sass';

const GoodsList = ({data, changeCurData}) => {
  const elements = data.map(item => {
    const {id} = item;
    return (
      <GoodsItem
        key={id}
        image={item.image}
        description={item.description}
        price={item.price}
        variety={item.variety}
        changeCurData={() => changeCurData(id)}/>
    );
  });

  return(
    <ul className='goods__list'>
      {elements}
    </ul>
  );
}

export default GoodsList