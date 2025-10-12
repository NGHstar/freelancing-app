import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/auth/Logout";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li>
        <Link to={"dashboard"}>
          <HiOutlineUser className="w-5 h-5 text-secondary hover:text-secondary/60" />
        </Link>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
