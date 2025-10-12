import Radio from "./Radio";

function RadioInputGroup({ errors, register, watch, configs }) {
  // ---
  const { options, validationSchema = {}, name } = configs;

  return (
    <div className="">
      <div className="flex items-center justify-start gap-x-4">
        {options.map((option) => {
          console.log(option);
          return (
            <Radio
              key={option.value}
              label={option.label}
              value={option.value}
              id={option.value}
              name={name}
              register={register}
              watch={watch}
              validationSchema={validationSchema}
              errors={errors}
            />
          );
        })}
      </div>
      <p className="text-sm text-ired mt-2 mr-1">
        {errors[name]?.message}
      </p>
    </div>
  );
}

export default RadioInputGroup;
