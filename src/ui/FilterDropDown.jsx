import { useSearchParams } from "react-router-dom";
import Select from "./form/Select";

function FilterDropDown({ options, filterField, className }) {
  // ---
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Select
        className={`text-input appearance-none ${className}`}
        onChange={handleChange}
        options={options}
        value={value}
      />
    </div>
  );
}

export default FilterDropDown;
