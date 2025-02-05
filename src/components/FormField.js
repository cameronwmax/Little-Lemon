import { useBooking } from "../context/useBooking";

function FormField({ label, fieldName, type, placeholder = "", required = true, value }) {
  const { handleChange } = useBooking();

  return (
    <div className="form-field">
      <label htmlFor={fieldName} className="booking__label">
        {required ? "*" : ""}
        {label}:
      </label>
      <input
        id={fieldName}
        type={type}
        required={required}
        name={fieldName}
        className="booking__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value, fieldName)}
      />
    </div>
  );
}

export default FormField;
