import UserAvatar from "../features/auth/UserAvatar";
import useUser from "../features/auth/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading, user } = useUser();

  return (
    <div className="py-4 px-8 flex justify-end bg-card">
      <div
        className={`container xl:max-w-lg flex items-center gap-x-8 justify-end ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
