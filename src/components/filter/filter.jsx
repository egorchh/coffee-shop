import './filter.sass'

const Filter = () => {
  return (
    <div className="filter">
      <span className="filter__text">Or filter</span>
      <button className='filter__button'>Brazil</button>
      <button className='filter__button'>Kenya</button>
      <button className='filter__button'>Columbia</button>
    </div>
  );
}

export default Filter;