import FooterItem from "./FooterItem";

function FooterList({ textArray }) {
  return (
    <ul className="footer__list">
      {textArray.map((text, i) => (
        <FooterItem text={text} key={i} />
      ))}
    </ul>
  );
}

export default FooterList;
