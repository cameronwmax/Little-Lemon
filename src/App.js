import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BookingProvider } from "./context/useBooking";

function App() {
  return (
    <BookingProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </BookingProvider>
  );
}

export default App;
