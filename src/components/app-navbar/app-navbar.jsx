import {Link} from "react-router-dom";

import coffeeBeans from "../../images/coffee-beans.svg"

import "./app-navbar.sass";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__image" src={coffeeBeans} alt="Coffe Beans" />
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__item-link" to="/">Coffee house</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__item-link" to="/beans">Our coffee</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__item-link" to="/goods">For your pleasure</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;