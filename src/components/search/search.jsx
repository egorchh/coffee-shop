import { Component } from 'react';

import './search.sass';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  
  render() {
    return (
      <div className='search'>
        <span className="search__text">Lookig for</span>
        <input 
        placeholder="start typing here..." 
        type="text"
        onChange={this.onUpdateSearch}/>
      </div>
    );
  }
}

export default Search;