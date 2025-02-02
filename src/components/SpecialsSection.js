import Button from "./Button";
import Cards from "./Cards";

function SpecialsSection() {
  return (
    <section className="specials center">
      <div className="specials__header">
        <h2 className="specials__heading">This weeks specials!</h2>
        <Button>Online Menu</Button>
      </div>
      <Cards />
    </section>
  );
}

export default SpecialsSection;
