import Navbar from "../app-navbar/app-navbar";

import "./app-header.sass"

import coffeeBeans from '../../images/coffee-beans.svg'


const Header = ({title, background}) => {
  const footerLink = " white"
  return (
    <header className="header">
      <img className="header__background" src={background} alt="Coffee shop background" />
      <div className="header__nav-container">
        <Navbar 
        linkColor={footerLink}
        logo={coffeeBeans}/>
      </div>
      <h1 className="header__title">{title}</h1>
    </header>
  );
}

export default Header;