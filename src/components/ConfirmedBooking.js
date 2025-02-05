import { useBooking } from "../context/useBooking";
import ConfirmedHeading from "./ConfirmedHeading";
import ConfirmedList from "./ConfirmedList";

function ConfirmedBooking() {
  const { confirmedBooking } = useBooking();

  if (confirmedBooking)
    return (
      <div className="confirmed center">
        <div className="confirmed__wrapper">
          <ConfirmedHeading />
          <ConfirmedList />
        </div>
      </div>
    );
}

export default ConfirmedBooking;
