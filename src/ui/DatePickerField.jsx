import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="text-input"
        value={date}
        multiple={false}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </div>
  );
}

export default DatePickerField;
