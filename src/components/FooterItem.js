function FooterItem({ text }) {
  return (
    <li className="footer__item">
      <a href="/" className="footer__link">
        {text}
      </a>
    </li>
  );
}

export default FooterItem;
