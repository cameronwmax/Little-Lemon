import Card from "./Card";

function Cards() {
  return (
    <div className="specials__cards">
      <Card dish="Greek Salad" price="12.99" imgName="greek-salad">
        The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta
        cheese, garnished with crunchy garlic and rosemary croutons.
      </Card>

      <Card dish="Bruchetta" price="5.99" imgName="bruchetta">
        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned
        with salt and olive oil.
      </Card>

      <Card dish="Lemon Dessert" price="5.00" imgName="lemon-dessert">
        This comes straight from grandma's recipe book; every last ingredient has been sourced and
        is as authentic as can be imagined.
      </Card>
    </div>
  );
}

export default Cards;
