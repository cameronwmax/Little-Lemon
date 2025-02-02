function TestimonialsCard({ fullName, rating, review, imgPath }) {
  return (
    <div className="testimonials__card">
      <div className="testimonials__img-wrapper">
        <img src={`${imgPath}`} alt="Ethan" className="testimonials__img" />
      </div>
      <div className="testimonials__content">
        <span className="testimonials__rating">{rating}/5</span>
        <h4 className="testimonials__name">{fullName}</h4>
        <p className="testimonials__review">
          <q>{review}</q>
        </p>
      </div>
    </div>
  );
}

export default TestimonialsCard;
