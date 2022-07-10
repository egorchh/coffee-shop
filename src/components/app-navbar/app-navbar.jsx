import {Link} from "react-router-dom";

import "./app-navbar.sass";

const Navbar = ({linkColor, logo}) => {
  const linkClassName = 'navbar__item-link';

  return (
    <div className="navbar">
      <img className="navbar__image" src={logo} alt="Coffe Beans" />
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className={linkClassName + linkColor} to="/">Coffee house</Link>
        </li>
        <li className="navbar__item">
          <Link className={linkClassName + linkColor} to="/beans">Our coffee</Link>
        </li>
        <li className="navbar__item">
          <Link className={linkClassName + linkColor} to="/goods">For your pleasure</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;