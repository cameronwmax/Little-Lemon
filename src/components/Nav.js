import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav" className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Menu
          </a>
        </li>
        <li className="nav__item">
          <Link to="/booking" className="nav__link">
            Reservations
          </Link>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Order Online
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
