import { Component } from 'react';

import HomeHeader from './home-components/home-header/home-header';
import HomeDescription from './home-components/home-description/home-description';
import OurBest from './home-components/home-our-best/home-our-best';


class HomePage extends Component {
  render() {
    const {data} = this.props
    return (
      <div>
        <HomeHeader/>
        <HomeDescription/>
        <OurBest data={data}/>
      </div>
    );
  }
}

export default HomePage;