function AboutSection() {
  return (
    <section className="about center">
      <div className="about__content">
        <div className="about__heading">
          <h2 className="about__heading-primary">Little Lemon</h2>
          <h4 className="about__heading-secondary">Chicago</h4>
        </div>

        <p className="about__text">
          At Little Lemon, brothers Adrian and Mario bring their Mediterranean roots to life with
          fresh, locally sourced ingredients and time-honored recipes. Their passion for simple,
          flavorful dishes creates a warm and inviting dining experience. Whether you're here for a
          classic cocktail or a delicious meal, Little Lemon offers a taste of the Mediterranean in
          every bite.
        </p>
      </div>

      <div className="about__imgs-wrapper">
        <div className="about__img-wrapper about__img-1">
          <img src="../../assets/owners-A.jpg" alt="Adrian and Mario" className="about__img" />
        </div>
        <div className="about__img-wrapper about__img-2">
          <img src="../../assets/owners-B.jpg" alt="Adrian and Mario" className="about__img " />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
