function ConfirmedItem({ label, detail }) {
  return (
    <li className="confirmed__item">
      {label}: <span>{detail}</span>
    </li>
  );
}

export default ConfirmedItem;
