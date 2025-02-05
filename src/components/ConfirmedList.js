import { useBooking } from "../context/useBooking";
import ConfirmedItem from "./ConfirmedItem";

function ConfirmedList() {
  const { confirmedBooking } = useBooking();
  const { firstName, lastName, date, time, guests, email, phone, occasion } = confirmedBooking;
  return (
    <ul className="confirmed__list">
      <ConfirmedItem label="Name" detail={`${firstName} ${lastName}`} />
      <ConfirmedItem label="Guests" detail={guests} />
      <ConfirmedItem label="Date" detail={`${date} | Time: ${time}`} />
      <ConfirmedItem label="Email" detail={`${email} | Phone number: ${phone}`} />
      {occasion && <ConfirmedItem label="Occasion" detail={occasion} />}
    </ul>
  );
}

export default ConfirmedList;
