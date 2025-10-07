import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  // ---
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary/70 active:bg-primary hover:text-white px-2 py-1.5 rounded-lg duration-200 transition";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `bg-primary text-white ${navLinkClass}`
            : `${navLinkClass} text-secondary`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
