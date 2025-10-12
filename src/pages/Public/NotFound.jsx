import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="sm:max-w-sm flex pt-30 m-auto">
      <div>
        <span className="text-7xl w-full flex  justify-center mb-8">
          ⚠️
        </span>
        <h1 className="text-xl font-medium text-secondary mb-8">
          صفحه‌ای که به دنبال آن بودید یافت نشد!
        </h1>
        <button
          onClick={moveBack}
          className="brn btn--primary px-5 pb-[6px] pt-2 rounded-xl hover:bg-primary/70 flex items-center gap-x-2 cursor-pointer"
        >
          <HiArrowRight className="w-4 h-4 text-secondary" />
          <span>بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
