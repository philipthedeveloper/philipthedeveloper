import FormFeedback from "./FormFeedback";

const FormInput = ({
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  validation,
  disabled,
  maxLength,
  styles,
  id,
}) => {
  if (type === "text") {
    return (
      <div className="form_group">
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          style={styles}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="form_group">
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          style={styles}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  return (
    <div className="form_group">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
      />
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

export default FormInput;
