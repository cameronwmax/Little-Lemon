import FormField from "./FormField";

function FormEmailPhone({ values, onChange }) {
  return (
    <div className="two-fields">
      <FormField
        label="Email"
        fieldName="email"
        type="email"
        placeholder="Email"
        value={values[0]}
        onChange={onChange}
      />

      <FormField
        label="Phone Number (012-345-6789)"
        fieldName="phone"
        type="tel"
        placeholder="Phone Number"
        value={values[1]}
        onChange={onChange}
      />
    </div>
  );
}

export default FormEmailPhone;
