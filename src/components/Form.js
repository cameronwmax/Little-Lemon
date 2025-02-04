import { useState } from "react";
import FormDetails from "./FormDetails";
import FormEmailPhone from "./FormEmailPhone";
import FormField from "./FormField";
import FormFieldSelect from "./FormFieldSelect";
import FormNameField from "./FormNameField";

const reservationTimes = [
  "4:00 pm",
  "4:30 pm",
  "5:45 pm",
  "6:30 pm",
  "7:00 pm",
  "7:45 pm",
  "8:30 pm",
  "9:45 pm",
];
const occasions = ["Birthday", "Engagement", "Anniversary"];

function Form() {
  const [booking, setBooking] = useState({
    guests: 1,
    date: new Date().toISOString().split("T")[0],
    time: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleChange(value, field) {
    setBooking((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(booking);
  }

  return (
    <form className="booking__form" onSubmit={handleSubmit}>
      <FormField
        label="Number of Guests"
        fieldName="guests"
        type="number"
        placeholder="Number of guests"
        value={booking.guests}
        onChange={handleChange}
      />
      <FormField
        label="Date"
        fieldName="date"
        type="date"
        value={booking.date}
        onChange={handleChange}
      />

      <FormFieldSelect
        label="Time"
        fieldName="time"
        options={reservationTimes}
        value={booking.time}
        onChange={handleChange}
      />

      <FormFieldSelect
        label="Occasion"
        fieldName="occasion"
        options={occasions}
        required={false}
        value={booking.occasion}
        onChange={handleChange}
      />

      <FormNameField values={[booking.firstName, booking.lastName]} onChange={handleChange} />
      <FormEmailPhone values={[booking.email, booking.phone]} onChange={handleChange} />

      <FormDetails numGuests={booking.guests} date={booking.date} time={booking.time} />

      <input type="submit" value="Book Reservation" className="btn" />
    </form>
  );
}

export default Form;
