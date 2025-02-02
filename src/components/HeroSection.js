import Button from "./Button";

function HeroSection() {
  return (
    <div className="background-green">
      <section className="hero center">
        <div className="hero__about">
          <div className="hero__headings">
            <h1 className="hero__heading-primary">Little Lemon</h1>
            <h3 className="hero__heading-secondary">Chicago</h3>
          </div>
          <p className="hero__text">
            Little Lemon is a charming neighborhood bistro that serves simple food and classic
            cocktails in a lively but casual environment. The restaurant features a locally-sourced
            menu with daily specials.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div className="hero__img-wrapper">
          <img src="../assets/hero.jpg" alt="Food from the restaurant" className="hero__img" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
