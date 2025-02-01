import Logo from "./Logo";

function Footer() {
  return (
    <footer id="footer">
      <Logo />

      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Adress</a>
        </li>
        <li>
          <a href="">Phone</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
