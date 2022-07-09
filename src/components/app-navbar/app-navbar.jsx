import {Link} from "react-router-dom"



import "./app-navbar.sass"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Coffee house</Link>
        </li>
        <li>
          <Link to="/beans">Our coffee</Link>
        </li>
        <li>
          <Link to="/goods">For your pleasure</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;