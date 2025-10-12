function Radio({
  label,
  value,
  register,
  name,
  id,
  watch,
  validationSchema,
}) {
  return (
    <label htmlFor={id} className="l-radio">
      <input
        type="radio"
        id={id}
        name={name}
        tabIndex="1"
        value={value}
        checked={watch(name) === value}
        {...register(name, validationSchema)}
      />
      <span>{label}</span>
    </label>
  );
}

export default Radio;
