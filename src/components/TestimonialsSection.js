import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    id: 1,
    fullName: "Sarah Mitchell",
    rating: 5,
    review: "Fresh flavors, friendly staff, and amazing desserts - I loved it!",
    imgPath: "../../assets/testimonials/Sarah.jpg",
  },
  {
    id: 2,
    fullName: "Jaks Thompson",
    rating: 4,
    review: "Delicious food with a cozy vibe, but service was a bit slow.",
    imgPath: "../../assets/testimonials/Jake.jpg",
  },
  {
    id: 3,
    fullName: "Ethan Reynolds",
    rating: 4,
    review: "Beautifylly presented dishes with fresh ingredients.",
    imgPath: "../../assets/testimonials/Ethan.jpg",
  },
  {
    id: 4,
    fullName: "Emily Carter",
    rating: 5,
    review: "Great food, great service, perfect meal!",
    imgPath: "../../assets/testimonials/Emily.jpg",
  },
];

function TestimonialsSection() {
  return (
    <div className="background-green">
      <section className="testimonials center">
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            fullName={testimonial.fullName}
            rating={testimonial.rating}
            review={testimonial.review}
            imgPath={testimonial.imgPath}
            key={testimonial.id}
          />
        ))}
      </section>
    </div>
  );
}

export default TestimonialsSection;
