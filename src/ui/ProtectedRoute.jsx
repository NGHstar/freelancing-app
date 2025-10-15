import { useEffect } from "react";
import useAuthorize from "../features/auth/useAuthorize";
import NotFound from "../pages/Public/NotFound";
import LoadingIndicator from "./LoadingIndicator";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // ---
  const navigate = useNavigate();
  const { isAuthorized, isLoading, isAuthenticated, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading)
      return navigate("/auth", { replace: true });
    if (!isAuthorized && !isLoading) return navigate("/not-access");
    if (!isVerified && !isLoading) return navigate("/not-access");
  }, [
    isAuthenticated,
    isAuthorized,
    isLoading,
    isVerified,
    navigate,
  ]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingIndicator />
      </div>
    );

  if (isAuthenticated && isAuthenticated) return children;
}

export default ProtectedRoute;
