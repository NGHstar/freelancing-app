import { Link } from "react-router-dom";

function SiteSimpleHeader() {
  return (
    <div className="flex sm:mt-2 p-6 sm:py-8 sm:px-10 items-center justify-center">
      <Link to="/">
        <img
          src="logolight4.png"
          className="dark:hidden"
          alt="logo"
        />
        <img
          src="logodark4.png"
          className="not-dark:hidden"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default SiteSimpleHeader;
