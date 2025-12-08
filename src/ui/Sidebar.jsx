import { Link } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <>
      <div className="row-start-1 row-span-2 max-sm:hidden w-56 border-l-2 border-border bg-card p-4">
        <Link to="/">
          <img
            src="/log5light.png"
            className="w-[37px] mx-auto mt-4 mb-8 not-dark:hidden"
          />
          <img
            src="/log5.png"
            className="w-[37px] mx-auto mt-4 mb-8 dark:hidden"
          />
        </Link>
        <ul className="flex flex-col gap-y-4">{children}</ul>
      </div>

      <div className="row-start-1 row-span-2 sm:hidden  border-l-2 border-border bg-card p-1">
        <ul className="flex flex-col gap-y-2">
          <Link to="/">
            <img
              src="/log5light.png"
              className="w-[27px] mx-auto mt-4 mb-8 not-dark:hidden"
            />
            <img
              src="/log5.png"
              className="w-[27px] mx-auto mt-4 mb-8 dark:hidden"
            />
          </Link>
          {children}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
