import { useBooking } from "../context/useBooking";

function FormNameField({ values }) {
  const { handleChange } = useBooking();
  return (
    <div className="form-field">
      <label htmlFor="firstName" className="booking__label">
        *Name:
      </label>
      <div className="two-fields">
        <input
          id={values[0]}
          type="text"
          required
          name="firstName"
          className="booking__input"
          placeholder="First"
          value={values[0]}
          onChange={(e) => handleChange(e.target.value, "firstName")}
        />
        <input
          id={values[1]}
          type="text"
          required
          name="lastName"
          className="booking__input"
          placeholder="Last"
          value={values[1]}
          onChange={(e) => handleChange(e.target.value, "lastName")}
        />
      </div>
    </div>
  );
}

export default FormNameField;
