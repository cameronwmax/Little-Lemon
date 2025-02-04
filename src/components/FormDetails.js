function FormDetails({ numGuests, date, time }) {
  return (
    <div className="booking-details">
      <h4 className="booking-header">Reservation details:</h4>
      <p className="booking-info">
        {numGuests} guests on {date} at {time}
      </p>
    </div>
  );
}

export default FormDetails;
