function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary">
        {label}
        {required && <span className="text-ired">*</span>}
      </label>
      <div className="relative">
        <select
          {...register(name)}
          id={name}
          className="text-input appearance-none"
        >
          {options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                className="text-secondary-400"
              >
                {option.label}
              </option>
            );
          })}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-7 w-7 ml-1 absolute top-3.5 left-1 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}

export default RHFSelect;
