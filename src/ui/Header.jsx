import useUser from "../features/auth/useUser";

function Header() {
  const { data } = useUser();
  console.log(data);

  return <div className="py-4 px-8">app header</div>;
}

export default Header;
