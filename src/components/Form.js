import { useState } from "react";
import FormDetails from "./FormDetails";
import FormEmailPhone from "./FormEmailPhone";
import FormField from "./FormField";
import FormFieldSelect from "./FormFieldSelect";
import FormNameField from "./FormNameField";

function Form() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit() {
    console.log("test");
  }

  return (
    <form className="booking__form" onSubmit={handleSubmit}>
      <FormField
        label="Number of Guests"
        fieldName="guests"
        type="number"
        placeholder="Number of guests"
        value={guests}
        onChange={setGuests}
      />
      <FormField label="Date" fieldName="date" type="date" value={date} onChange={setDate} />

      <FormFieldSelect
        label="Time"
        fieldName="time"
        options={["1", "2", "3"]}
        value={time}
        onChange={setTime}
      />

      <FormFieldSelect
        label="Occasion"
        fieldName="occasion"
        options={["1", "2", "3"]}
        required={false}
        value={occasion}
        onChange={setOccasion}
      />

      <FormNameField values={[firstName, lastName]} setters={[setFirstName, setLastName]} />
      <FormEmailPhone values={[email, phoneNumber]} setters={[setEmail, setPhoneNumber]} />

      <FormDetails numGuests="4" date="2/3/2025" time="6:20pm" />

      <input type="submit" value="Book Reservation" className="btn" />
    </form>
  );
}

export default Form;
