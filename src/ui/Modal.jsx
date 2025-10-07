import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, minWidth = "", children }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div
        className={`bg-[#282a36]/30 backdrop-blur-md fixed inset-0 w-full h-screen z-50 flex justify-center overflow-auto`}
      >
        <div
          ref={ref}
          className={`absolute top-28 rounded-xl bg-card shadow-border ring-border ring-1 p-4 shadow-lg transition duration-200 w-[calc(100vw-2rem)] sm:w-auto ${minWidth}`}
        >
          {/* Modal Header */}
          <div className="flex relative items-center justify-between border-b border-border pb-4 mb-6 gap-6">
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
