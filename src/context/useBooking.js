import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../utils/fakeAPI";

const occasions = ["Birthday", "Engagement", "Anniversary"];
const tempBooking = {
  date: "2025-02-05",
  email: "cameronwmax@icloud.com",
  firstName: "Cameron",
  guests: 1,
  lastName: "Maxwell",
  occasion: "Birthday",
  phone: "4252869025",
  time: "17:00",
};

const initialState = {
  guests: 1,
  date: new Date().toISOString().split("T")[0],
  time: "",
  occasion: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const BookingContext = createContext();

function BookingProvider({ children }) {
  const [confirmedBooking, setConfirmedBooking] = useState({});
  const [reservationTimes, setReservationTimes] = useState([]);
  const [booking, setBooking] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(value, field) {
    setBooking((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!submitAPI()) return;

    setConfirmedBooking(booking);
    setBooking(initialState);
    navigate("/confirmed-booking");
  }

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        reservationTimes,
        setReservationTimes,
        handleChange,
        handleSubmit,
        confirmedBooking,
        occasions,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) throw new Error("useBooking must be used within a BookingProvider");
  return context;
}

export { BookingProvider, useBooking };
