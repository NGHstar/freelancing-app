import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProfileComplete from "./pages/ProfileComplete";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import AppLayout from "./ui/AppLayout";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerSingleProject from "./pages/OwnerSingleProject";

const App = () => {
  // ---
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route
            index
            element={<Navigate to="dashboard" replace={true} />}
          />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<OwnerProjects />} />
          <Route
            path="projects/:id"
            element={<OwnerSingleProject />}
          />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route
          path="/profile-complete"
          element={<ProfileComplete />}
        />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
