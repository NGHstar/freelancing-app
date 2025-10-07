import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import LoadingIndicator from "../../ui/LoadingIndicator";

function Logout() {
  // ---
  const { isPending, logout } = useLogout();
  return isPending ? (
    <LoadingIndicator />
  ) : (
    <div onClick={logout}>
      <HiArrowRightOnRectangle className="h-5 w-5 text-secondary" />
    </div>
  );
}

export default Logout;
