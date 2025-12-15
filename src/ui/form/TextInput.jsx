function TextInput({
  label,
  name,
  isNum,
  isMultiline = false,
  register,
  validationSchema,
  placeHolder,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 mr-1 block">
        {label}
        {validationSchema?.required && (
          <span className="text-ired">*</span>
        )}
      </label>

      {isMultiline ? (
        <textarea
          {...register(name, validationSchema)}
          dir="rtl"
          id={name}
          placeholder={placeHolder}
          name={name}
          rows={4}
          className="text-input resize-none"
          autoComplete="off"
        />
      ) : (
        <input
          {...register(name, validationSchema)}
          dir={isNum ? "ltr" : "rtl"}
          id={name}
          placeholder={placeHolder}
          name={name}
          type={isNum ? "number" : "text"}
          className="text-input"
          autoComplete="off"
        />
      )}

      {errors[name] && (
        <p className="text-ired text-sm mt-3">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default TextInput;
