function TextInput({
  label,
  name,
  value,
  onChange,
  isNum,
  placeHolder,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block">
        {label}
      </label>
      <input
        dir={isNum ? "ltr" : "rtl"}
        id={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        name={name}
        type={isNum ? "number" : "text"}
        className="text-input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextInput;
