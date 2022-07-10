import './app-footer.sass';

import Navbar from '../app-navbar/app-navbar';

import beansLogo from '../../images/beans-logo-black.svg';
import coffeeBeansBlack from "../../images/coffee-beans-black.svg";

const Footer = () => {

  const footerLink = " black"

  return (
    <footer>
      <Navbar 
      linkColor={footerLink} 
      logo={coffeeBeansBlack}/>
      <img className="footer__image" src={beansLogo} alt="Beans logo" />
    </footer>
  );
}

export default Footer;