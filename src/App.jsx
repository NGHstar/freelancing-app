import { Navigate, Route, Routes } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProfileComplete from "./pages/Auth/ProfileComplete";
import NotFound from "./pages/Public/NotFound";
import OwnerDashboard from "./pages/Owner/OwnerDashboard";
import OwnerProjects from "./pages/Owner/OwnerProjects";

import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./pages/Public/Home";
import FreelancerDashboard from "./pages/Freelancer/FreelancerDashboard";
import Auth from "./pages/Auth/Auth";
import OwnerProject from "./pages/Owner/OwnerProject";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerProposals from "./pages/Freelancer/FreelancerProposals";
import SubmittedProjects from "./pages/Freelancer/SubmittedProjects";

const App = () => {
  // ---
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          {/* Auth */}
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/profile-complete"
            element={<ProfileComplete />}
          />

          {/* Owner */}
          <Route path="/owner" element={<OwnerLayout />}>
            <Route
              index
              element={<Navigate to="dashboard" replace={true} />}
            />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<OwnerProjects />} />
            <Route path="projects/:id" element={<OwnerProject />} />
          </Route>

          {/* Freelancer */}
          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route
              index
              element={<Navigate to="dashboard" replace={true} />}
            />
            <Route
              path="dashboard"
              element={<FreelancerDashboard />}
            />
            <Route
              path="proposals"
              element={<FreelancerProposals />}
            />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>

          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* - */}
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;
