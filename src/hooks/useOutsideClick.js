import { useEffect, useRef } from "react";

export default function useOutsideClick(
  onClose,
  listenCapturing = true
) {
  const ref = useRef();

  function handleClose(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClose, listenCapturing);

    return () =>
      document.removeEventListener(
        "click",
        handleClose,
        listenCapturing
      );
  }, [onClose, listenCapturing]);

  return ref;
}
