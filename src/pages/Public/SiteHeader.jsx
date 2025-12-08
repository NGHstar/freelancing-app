function SiteHeader({ children, isCenter = false }) {
  return (
    <div
      className={`flex sm:mt-2 p-6 sm:py-8 items-center ${
        isCenter ? "justify-center" : "justify-between"
      }`}
    >
      <div>
        <img
          src="logolight4.png"
          className="dark:hidden max-sm:hidden"
          alt="logo"
        />
        <img
          src="logodark4.png"
          className="not-dark:hidden max-sm:hidden"
          alt="logo"
        />
        <img
          src="log5.png"
          className="dark:hidden sm:hidden"
          alt="logo"
        />
        <img
          src="log5light.png"
          className="not-dark:hidden sm:hidden"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-6">{children}</div>
    </div>
  );
}

export default SiteHeader;
