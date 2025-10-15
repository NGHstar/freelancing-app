import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";
import LoadingIndicator from "../../../ui/LoadingIndicator";

const sortOptions = [
  {
    label: "مرتب‌سازی (جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی‌ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectHeader() {
  // ---
  const { transformedCategories, isLoading } = useCategories();

  return (
    <div className="flex flex-wrap justify-between mb-12">
      <h1 className="text-secondary text-xl mt-4 font-black -translate-y-1">
        لیست پروژه‌ها
      </h1>
      <div className="flex gap-4">
        {isLoading ? (
          <LoadingIndicator mt="mt-5 ml-22" size="small" />
        ) : (
          <FilterDropDown
            className="w-44"
            filterField={"category"}
            options={[
              {
                value: "ALL",
                label: "دسته‌بندی (همه)",
              },
              ...transformedCategories,
            ]}
          />
        )}
        <FilterDropDown
          filterField={"sort"}
          className="w-56"
          options={sortOptions}
        />
        <FilterDropDown
          filterField={"status"}
          className="w-26"
          options={statusOptions}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
