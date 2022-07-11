import './search.sass';

const Search = () => {
  return (
    <div className='search'>
      <span className="search__text">Lookig for</span>
      <input placeholder="start typing here..." type="text"/>
    </div>
  );
}

export default Search;