import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../Form";

test("renders the form with input fields and submit button", () => {
  render(<Form />);

  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Reservation/i)).toBeInTheDocument();
});
