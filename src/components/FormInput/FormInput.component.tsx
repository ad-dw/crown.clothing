import "./FormInput.styles.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      <input {...inputProps} className="form-input" />
      <label
        className={`form-input-label ${
          inputProps.value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
