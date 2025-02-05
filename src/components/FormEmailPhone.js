import FormField from "./FormField";

function FormEmailPhone({ values }) {
  return (
    <div className="two-fields">
      <FormField
        label="Email"
        fieldName="email"
        type="email"
        placeholder="Email"
        value={values[0]}
      />

      <FormField
        label="Phone Number (012-345-6789)"
        fieldName="phone"
        type="tel"
        placeholder="Phone Number"
        value={values[1]}
      />
    </div>
  );
}

export default FormEmailPhone;
