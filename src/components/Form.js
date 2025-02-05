import { useEffect } from "react";
import { useBooking } from "../context/useBooking";
import { fetchAPI } from "../utils/fakeAPI";
import FormDetails from "./FormDetails";
import FormEmailPhone from "./FormEmailPhone";
import FormField from "./FormField";
import FormFieldSelect from "./FormFieldSelect";
import FormNameField from "./FormNameField";

function Form() {
  const { booking, setReservationTimes, handleSubmit } = useBooking();

  useEffect(() => {
    const response = fetchAPI(new Date(booking.date));
    setReservationTimes(response);
  }, [booking.date, setReservationTimes]);

  return (
    <form className="booking__form" onSubmit={handleSubmit}>
      <FormField
        label="Number of Guests"
        fieldName="guests"
        type="number"
        placeholder="Number of guests"
        value={booking.guests}
      />
      <FormField label="Date" fieldName="date" type="date" value={booking.date} />

      <FormFieldSelect label="Time" fieldName="time" value={booking.time} />

      <FormFieldSelect
        label="Occasion"
        fieldName="occasion"
        required={false}
        value={booking.occasion}
      />

      <FormNameField values={[booking.firstName, booking.lastName]} />
      <FormEmailPhone values={[booking.email, booking.phone]} />

      <FormDetails numGuests={booking.guests} date={booking.date} time={booking.time} />

      <input type="submit" value="Book Reservation" className="btn" />
    </form>
  );
}

export default Form;
