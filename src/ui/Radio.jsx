function Radio({ label, value, onChange, name, id, checked }) {
  return (
    <label for={id} class="l-radio">
      <input
        type="radio"
        id={id}
        name={name}
        tabindex="1"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
}

export default Radio;
