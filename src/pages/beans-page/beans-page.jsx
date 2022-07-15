import { Component } from "react";

import Header from "../../components/app-header/app-header";
import PageDescription from "../../components/page-description/page-description";
import Filter from "../../components/filter/filter";
import Search from "../../components/search/search";
import GoodsList from "../../components/goods-list/goods-list";

import background from '../../images/second-background.png'
import descriptionImage from '../../images/goods-description-image.png';
import beansLogoBlack from '../../images/beans-logo-black.svg'

import './beans-page.sass'


class BeansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      filter: '',
    }
  }

  searchGood = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.description.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "Brasil":
        return items.filter(item => item.variety === "Brasil");
      case "Kenya":
        return items.filter(item => item.variety === "Kenya");
      case "Columbia":
        return items.filter(item => item.variety === "Columbia");
      default:
        return items;
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    const headerTitle = 'Our coffee';
    const descriptionTitle = 'About our beans';

    const {data, changeCurData} = this.props;
    const {term, filter} = this.state;
    const visibleData = this.filterPost(this.searchGood(data, term), filter);

    return (
      <div className="beans-page__wrapper">
        <Header 
        title={headerTitle}
        background={background}/>
        <PageDescription 
        descriptionImage={descriptionImage}
        title={descriptionTitle}
        logo={beansLogoBlack}/>
        <div className="finder">
          <Search onUpdateSearch={this.onUpdateSearch}/>
          <Filter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
        </div>
        <GoodsList 
        data={visibleData}
        changeCurData={changeCurData}/>
      </div>
    );
  }
}

export default BeansPage;