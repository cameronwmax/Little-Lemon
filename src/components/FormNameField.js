function FormNameField({ values, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor="firstName" className="booking__label">
        *Name:
      </label>
      <div className="two-fields">
        <input
          type="text"
          required
          name="firstName"
          className="booking__input"
          placeholder="First"
          value={values[0]}
          onChange={(e) => onChange(e.target.value, "firstName")}
        />
        <input
          type="text"
          required
          name="lastName"
          className="booking__input"
          placeholder="Last"
          value={values[1]}
          onChange={(e) => onChange(e.target.value, "lastName")}
        />
      </div>
    </div>
  );
}

export default FormNameField;
