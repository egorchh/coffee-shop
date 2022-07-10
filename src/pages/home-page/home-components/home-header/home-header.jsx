import Navbar from '../../../../components/app-navbar/app-navbar';

import "./home-header.sass";

import mainBg from "../../../../images/main-bg.jpg";
import beansLogo from "../../../../images/beans-logo.svg";
import coffeeBeans from "../../../../images/coffee-beans.svg"

const HomeHeader = () => {

  const headerLink = " white";

  return (
    <>
      <header className="home-header">       
        <img className="home-header__background" src={mainBg} alt="Home page background" />
        <div className="home-header__content">
          <div className="home-header__nav-container">
            <Navbar 
            linkColor={headerLink} 
            logo={coffeeBeans}/>
          </div>
          <h1 className="home-header__title">Everything You Love About Coffee</h1>
          <img className="home-header__logo" src={beansLogo} alt="Beans logo" />
          <p className="home-header__description">
            We makes every day full of energy and taste
          </p>
          <p className="home-header__description">
            Want to try our beans?
          </p>
          <button className="home-header__button">More</button>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;