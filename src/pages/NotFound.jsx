import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="sm:max-w-sm flex pt-30 m-auto">
      <div>
        <h1 className="text-xl font-bold text-secondary mb-8">
          صفحه‌ای که به دنبال آن بودید یافت نشد
        </h1>
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <HiArrowRight className="w-6 h-6 text-blue-500 -translate-y-1" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
