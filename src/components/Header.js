import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header id="header" className="header center">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
