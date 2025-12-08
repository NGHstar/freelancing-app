import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle({ className = "h-5 w-5" }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
      {darkMode ? (
        <HiOutlineMoon
          className={`${className} text-blue hover:text-blue/70`}
        />
      ) : (
        <HiOutlineSun
          className={`${className} text-primary hover:text-primary/70`}
        />
      )}
    </div>
  );
}

export default DarkModeToggle;
