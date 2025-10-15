import useUser from "./useUser";
import { useLocation } from "react-router-dom";

const roles = {
  admin: "ADMIN",
  freelancer: "FREELANCER",
  owner: "OWNER",
};

export default function useAuthorize() {
  // ---
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  const desireRole = pathname.split("/").at(1);

  if (Object.keys(roles).includes(desireRole)) {
    if (user && user.role === roles[desireRole]) isAuthorized = true;
  }

  return {
    isLoading,
    isAuthorized,
    isAuthenticated,
    user,
    isVerified,
  };
}
