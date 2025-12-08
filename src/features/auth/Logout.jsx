import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import LoadingIndicator from "../../ui/LoadingIndicator";

function Logout({ className = "h-5 w-5" }) {
  // ---
  const { isPending, logout } = useLogout();
  return isPending ? (
    <div className="translate-y-1.5 pr-2 transition duration-200">
      <LoadingIndicator size="small" />
    </div>
  ) : (
    <div onClick={logout}>
      <HiArrowRightOnRectangle
        className={`${className} text-secondary cursor-pointer hover:text-secondary/60`}
      />
    </div>
  );
}

export default Logout;
