import FooterList from "./FooterList";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="background-green">
      <footer id="footer" className="footer center">
        <div className="footer__logo">
          <Logo />
        </div>

        <FooterList
          textArray={["Home", "About", "Menu", "Reservations", "Order Online", "Login"]}
        />
        <FooterList textArray={["Address", "Phone Number", "Email"]} />
        <FooterList textArray={["Facebook", "Instagram", "Twitter"]} />
      </footer>
    </div>
  );
}

export default Footer;
