function FormField({ label, fieldName, type, placeholder = "", required = true, value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={fieldName} className="booking__label">
        {required ? "*" : ""}
        {label}:
      </label>
      <input
        type={type}
        required={required}
        name={fieldName}
        className="booking__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FormField;
