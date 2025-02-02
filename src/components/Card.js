function Card({ dish, price, imgName, children }) {
  return (
    <div className="specials__card">
      <div className="specials__card-img-wrapper">
        <img
          src={`../../assets/${imgName}.jpg`}
          alt="Specials card"
          className="specials__card-img"
        />
      </div>
      <div className="specials__card-content">
        <div className="specials__card-header">
          <h4 className="specials__card-heading">{dish}</h4>
          <span className="specials__card-price">${price}</span>
        </div>
        <p className="specials__card-description">{children}</p>
        <span className="specials__card-btn">
          Order a delivery
          <img
            src="../../assets/specials-icon.jpg"
            alt="Bicycler Icon"
            className="specials__card-icon"
          />
        </span>
      </div>
    </div>
  );
}

export default Card;
