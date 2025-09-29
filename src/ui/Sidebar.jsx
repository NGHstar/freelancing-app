import { HiFolderOpen, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="row-start-1 row-span-2 border-l-2 border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            داشبورد
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiFolderOpen />
            پروژه‌ها
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  // ---
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-blue-100/70 hover:text-blue-600 px-2 py-1.5 rounded-lg duration-200 transition";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-blue-100/70 text-blue-600 ${navLinkClass}`
          : `${navLinkClass} text-secondary`
      }
    >
      {children}
    </NavLink>
  );
}
