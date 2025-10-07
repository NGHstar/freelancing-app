import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
      {darkMode ? (
        <HiOutlineMoon className="h-5 w-5 text-blue-500" />
      ) : (
        <HiOutlineSun className="h-5 w-5 text-primary" />
      )}
    </div>
  );
}

export default DarkModeToggle;
