import { useEffect } from "react";

function FormFieldSelect({ label, fieldName, options, required = true, value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={fieldName} className="booking__label">
        {required ? "*" : ""}
        {label}:
      </label>
      <select
        id={fieldName}
        name={fieldName}
        required={required}
        className="booking__input booking__select"
        value={value}
        onChange={(e) => onChange(e.target.value, fieldName)}
      >
        <option value="" className="booking__option">
          --Please choose an option--
        </option>
        {options.map((option) => (
          <option value={option} key={option} className="booking__option">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormFieldSelect;
