import HomeHeader from './home-components/home-header/home-header';
import HomeDescription from './home-components/home-description/home-description';
import OurBest from './home-components/home-our-best/home-our-best';


const HomePage = () => {
  return (
    <div>
      <HomeHeader/>
      <HomeDescription/>
      <OurBest/>
    </div>
  );
}

export default HomePage;