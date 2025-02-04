function FormDetails({ numGuests, date, time }) {
  return (
    time && (
      <div className="booking-details">
        <h4 className="booking-header">Reservation details:</h4>

        <p className="booking-info">
          {numGuests} {numGuests > 1 ? "guests" : "guest"} on {date.slice(5)} at {time}
        </p>
      </div>
    )
  );
}

export default FormDetails;
