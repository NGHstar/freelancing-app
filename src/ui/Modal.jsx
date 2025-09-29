import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({
  open,
  onClose,
  title,
  children,
  icon,
  position = "center",
}) {
  const ref = useOutsideClick(onClose);

  // تعیین استایل بر اساس prop
  const positionClasses =
    position === "bottom"
      ? "items-end pb-10" // پایین + فاصله ۱۰
      : "items-center"; // وسط صفحه (دیفالت)

  return (
    open && (
      <div
        className={`bg-[#282a36]/30 backdrop-blur-[5px] fixed inset-0 w-full h-screen flex justify-center ${positionClasses} z-50`}
      >
        <div
          ref={ref}
          className="mx-auto rounded-lg bg-white shadow-gray-400 ring-gray-100 ring-1 p-4 shadow-lg transition duration-200 w-[calc(100vw-2rem)] sm:w-auto sm:min-w-2xl"
        >
          {/* Modal Header */}
          <div className="flex relative items-center justify-between border-b border-b-gray-200 pb-2 mb-6 gap-6">
            {icon && (
              <div className="w-11 h-11 bg-white rounded-full absolute -top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                {icon}
              </div>
            )}
            <p className="text-secondary font-bold text-md">
              {title}
            </p>
            <button onClick={onClose}>
              <HiOutlineX className="h-5 w-5 text-ired cursor-pointer" />
            </button>
          </div>

          {/* Body */}
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
