import { useBooking } from "../context/useBooking";

function ConfirmedHeading() {
  const { confirmedBooking } = useBooking();

  return (
    <h1 className="confirmed__heading">
      Thank you {confirmedBooking.firstName}, your reservation has been made!
    </h1>
  );
}

export default ConfirmedHeading;
