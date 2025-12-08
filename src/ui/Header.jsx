import Logout from "../features/auth/Logout";
import useUser from "../features/auth/useUser";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const { isLoading, user } = useUser();

  return (
    <div
      className={`py-4 px-8 max-sm:px-3 flex justify-between bg-card ${
        isLoading ? "blur-sm" : ""
      }`}
    >
      <span className="w-full">{user?.name}</span>
      <div className="container xl:max-w-lg flex items-center gap-x-4 justify-end">
        <Logout className="w-6 h-6" />
        <DarkModeToggle className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Header;
